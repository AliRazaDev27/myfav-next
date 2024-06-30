import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;


const connectDB = async () => {
  try {
    const con = await mongoose.connect(`${process.env.MONGODB_URI}/local`);
    console.log(`MongoDB Connected: ${con.connection.name}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};
async function clearDbCache() {
  console.log("clearing cache");
  await mongoose.disconnect();
}

export default connectDB;
export { clearDbCache };
