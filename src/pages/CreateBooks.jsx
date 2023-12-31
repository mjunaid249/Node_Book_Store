import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CreateBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSaveBook() {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/books", {
        method: "post",
        body: JSON.stringify({ title, author, publishYear }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setLoading(false);
      alert("Book Added!");
      setAuthor("");
      setTitle("");
      setPublishYear("");
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4 ">Create Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto ">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500 ">Tite</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full "
          />
          <label className="text-xl mr-4 text-gray-500 ">Author</label>
          <input
            name="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full "
          />
          <label className="text-xl mr-4 text-gray-500 ">Publish Year</label>
          <input
            name="publisYear"
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full "
          />
        </div>
        <button className="p-2 m-8 bg-sky-300" onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
};
