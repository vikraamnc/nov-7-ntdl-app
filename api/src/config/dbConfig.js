import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const dbUrl = "mongodb://127.0.0.1 27017";
    const con = await mongoose.connect(dbUrl);
    con && console.log("dbConnected", con);
  } catch (error) {
    console.log(error);
  }
};
export default connectDb;
