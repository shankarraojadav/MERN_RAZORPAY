import mongoose from "mongoose";


const connectDB = async () => {
    const url = process.env.MONGO_URL
  const { connection } = await mongoose.connect(url);
  console.log("db connected");
};


export default connectDB;