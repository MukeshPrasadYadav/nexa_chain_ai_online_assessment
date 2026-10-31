import mongoose from "mongoose";
import { logger } from "../utils/logger"

const ConnectDB = async () => {
    try {
        const url = process.env.CONNECTION_URL || "";
        
        await mongoose.connect(url);

     logger.info("MongoDB connected successfully");
    } catch (error : any) {
        logger.error(`faild to connect due to : ${error.message}`)
    throw error;
        process.exit(1);
    }
};

export default ConnectDB;