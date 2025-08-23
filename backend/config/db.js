import mongoose from "mongoose";

export const connectDB=async()=>{
   await mongoose.connect("mongodb+srv://cbtruong:0978978758@cluster0.ynyrnot.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
   .then(()=>console.log("DB connected!!!"))
}