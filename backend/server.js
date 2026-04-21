// import {app} from "./src/app.js"
// import ConnectToDB from "./src/config/db.js";
// import "dotenv/config"

// const PORT = process.env.PORT || 3000;

// ConnectToDB();

// app.listen(PORT, () => {
//     console.log("server is running");
// })

import app from "./src/app.js";
import connectDB from "./src/config/db.js";
import { initSocket } from "./src/config/socket.js";
import startCronJobs from "./src/config/cron.js";
import "dotenv/config";

const PORT = process.env.PORT || 3000;

const start = async () => {
  await connectDB();

  const server = app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });

  initSocket(server);
  startCronJobs();
};

start();