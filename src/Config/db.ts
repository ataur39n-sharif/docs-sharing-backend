import mongoose from "mongoose";
import config from "@/Config";

const connectDB = async () => {
    try {
        if (config.mongo_uri !== undefined) {
            const uri = config.node_env === 'development' ?
                'mongodb://localhost:27017/ecommerce-backend' : config.mongo_uri

            await mongoose.connect(uri)
            console.log("Database connection established.")
        } else {
            console.log('retrying to establish connection')
            connectDB();
        }
    } catch (e) {
        console.log(" from config ====>", e instanceof Error && e.message)
    }
}

export default connectDB