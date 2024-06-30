import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const con = await mongoose.connect(`${process.env.MONGODB_URI}/test`, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${con.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
