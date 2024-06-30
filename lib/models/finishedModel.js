import mongoose from 'mongoose';

const finishedSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  bookIds: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
    default: []
  },
  dramaIds: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Drama' }],
    default: []
  }
}, { timestamps: true });
const finishedModel = mongoose.models.Finished || mongoose.model("Finished", finishedSchema)
export default finishedModel

