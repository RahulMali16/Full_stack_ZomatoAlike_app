import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
//add config

const app = express();

const port = process.env.PORT  || 4000;


// add middle ware

app.use(express.json())
app.use(cors())
// dbconnection
connectDB();

//api endppoints

app.use("/api/food",foodRouter)

app.use("/images",express.static('uploads'))

app.use("/api/user",userRouter)

app.use("/api/cart",cartRouter)

app.use("/api/order",orderRouter)


app.get('/',(req,res) =>{
    res.send("Api working") 
} )


app.listen(port,()=>{
    console.log(`server started on ${port}`)
})

//mongodb+srv://rahulmali1603:<password>@cluster0.jpdudmg.mongodb.net/?