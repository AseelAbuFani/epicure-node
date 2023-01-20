import mongoose from "mongoose";

const connectDb = 
async () => {
  mongoose.set("strictQuery", true);
  await mongoose.connect("mongodb+srv://Aseel:Aseel23499@cluster0.8tzsbok.mongodb.net/?retryWrites=true&w=majority");
};

export { connectDb };
