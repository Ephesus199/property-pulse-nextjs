// import mongoose from "mongoose";

// const MONGODB_URL = process.env.MONGODB_URL;

// if (!MONGODB_URL) {
//   throw new Error("Please define MONGODB_URL in .env.local");
// }

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function connectDB() {
//   if (cached.conn) return cached.conn;

//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URL, {
//       bufferCommands: false,
//     });
//   }

//   cached.conn = await cached.promise;
//   return cached.conn;
// }

// export default connectDB;

// write code to connect mongodb

 import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;
if (!MONGODB_URL) {
  throw new Error("Please define MONGODB_URL in .env.local");
}

 const connectDB = async()=>{
     if (mongoose.connection.readyState === 1) {
    console.log("MongoDB already connected");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
 }

 export default connectDB