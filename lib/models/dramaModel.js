import mongoose from "mongoose";

const dramaSchema = new mongoose.Schema({
  url: {
    type: String,
    unique: true,
    trim: true,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  genres: {
    type: Array
  },
  tags: {
    type: Array
  }
}, { timestamps: true })
const dramaModel = mongoose.models.Drama || mongoose.model("Drama", dramaSchema)
export default dramaModel

