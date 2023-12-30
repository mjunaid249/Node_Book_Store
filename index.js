import express from "express";
const app = express();
import "./database/connect.js";
import { Book } from "./models/bookModel.js";
import cors from "cors";

app.use(express.json());
app.use(cors());

//Port
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Book Store app backend");
});

//API for creating a book

app.post("/books", async (req, res) => {
  const { title, author, publishYear } = req.body;
  try {
    if (!title || !author || !publishYear) {
      return res.status(400).send({
        message: "Send all the required Fields",
      });
    }
    const book = await Book.create({
      title,
      author,
      publishYear,
    });

    res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Getting Book data

app.get("/books", async (req, res) => {
  try {
    const books = await Book.find({});

    return res.json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    res.send({
      message: error.message,
    });
  }
});

//Route to get a single book

app.get("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findById(id);

    res.json(book);
  } catch (error) {
    console.log(error.message);

    res.send(error.message);
  }
});

//Route to Update Book

app.put("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);

    if (!result) {
      res.send("Book not found");
    } else {
      res.send({ message: "Books updatede Successfully!" });
    }

    res.json(result);
  } catch (error) {
    res.send({ message: error.message });
  }
});

//Route to update a book

app.delete("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      res.send({ message: "Book not found" });
    } else {
      res.send({ message: "Books Successfully Deleted!" });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is working at ${PORT}`);
});
