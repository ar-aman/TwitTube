import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const mongodb_url = process.env.MONGODB_URL || 'mongodb+srv://amanmongodb:amanmongodb@tweettube.i2y93.mongodb.net';

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${mongodb_url}/${DB_NAME}`);
        console.log(`Database connected to: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("ERROR: ", error);
        process.exit(1);
    }
}

export default connectDB