import express from "express"
import path from "path"
import dotenv from "dotenv"
import morgan from "morgan"
import connectDB from "./config/db.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"
import productRoutes from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import  uploadRoutes from "./routes/uploadRoutes.js"
const app = express();

app.use(express.json())

app.use(morgan("dev"))

dotenv.config()

connectDB()


app.get("/", (req, res) => {
    res.send("This IS Sanket Bagad");
})

app.use("/api/products", productRoutes)
app.use("/api/users", userRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/upload", uploadRoutes)

app.get("/api/config/paypal", (req, res) => res.send("AShkBb7sKYCfnWtJ5qKoGYBOz4eEmz2zHLGJjhvdvDjUogrYSn1d8cc8XLdCaQ09DHud61wE-uj8ETZG"))

const __dirname = path.resolve()
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`The Fucking Server is RunningOn Server 5000`));