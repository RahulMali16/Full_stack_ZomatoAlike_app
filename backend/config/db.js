import mongoose from "mongoose";


 export const connectDB  = async()=>{
    await mongoose.connect('mongodb+srv://rahulmali1603:Rahulmali_22@cluster0.jpdudmg.mongodb.net/food-del').then(()=>{
        console.log("db connected")
    });
}