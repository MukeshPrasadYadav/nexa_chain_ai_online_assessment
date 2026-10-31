import express from 'express'
import ConnectDB from './lib/dbConnection';
import { logger } from './utils/logger'
import app from './app';
import dotenv from 'dotenv';
dotenv.config();

const Port=process.env.PORT;
console.log(Port);

(async () => {
  try {
    await ConnectDB(); 
    app.listen(Port, () => {
      console.log(`server running on port : %{Port}`)
      logger.info(` Server running on port ${Port}`);
    });
  } catch (error: any) {
    console.error(`faild to start server : ${error.message}`)
    logger.error(` Failed to start server: ${error.message}`);
    process.exit(1);
  }
})();