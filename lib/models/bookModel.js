import mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
  rank: {
    type: String
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  year: {
    type: String
  },
  country: {
    type: String
  },
  language: {
    type: String
  },
  pages: {
    type: String
  },
  words: {
    type: String
  },
  description: {
    type: String
  },
  genre: {
    type: String
  },
  img: {
    type: String
  }
}, { timestamps: true })
const bookModel = mongoose.models.Book || mongoose.model("Book", bookSchema)
export default bookModel




