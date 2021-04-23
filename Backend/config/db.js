import mongoose from "mongoose"
import dotenv from "dotenv"



const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://aishwariya:aishwariya@cluster0.vu43y.mongodb.net/proshop?retryWrites=true&w=majority", {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }

}


export default connectDB
