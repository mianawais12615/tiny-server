import mongoose from "mongoose";

export const ConnectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB connected");
  } catch (err) {
    console.log("DB Connection Error: ", err);
  }
};
