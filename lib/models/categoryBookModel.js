import mongoose from "mongoose";

const categoryBookSchema = new mongoose.Schema({
  language: {
    type: Array
  },
  country: {
    type: Array
  }
}, { timestamps: true });

const categoryBookModel = mongoose.models.CategoryBook || mongoose.model("CategoryBook", categoryBookSchema);
export default categoryBookModel

