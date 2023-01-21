import mongoose from 'mongoose';

const connectDb = async () => {
  mongoose.set('strictQuery', true);
  await mongoose.connect(
    'mongodb+srv://mat:Mat123@cluster0.8tzsbok.mongodb.net/test'
  );
};

export { connectDb };
