import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017", {
    dbName: "Book-Store-App",
  })
  .then(() => {
    console.log("DATABASE CONNECTED!");
  })
  .catch(() => {
    console.log("Error in Connecting Database");
  });
