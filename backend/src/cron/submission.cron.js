import cron from "node-cron";
import User from "../models/user.model.js";
import { fetchCFSubmissions } from "../services/submission.service.js";
import { emitActivity } from "../sockets/activity.socket.js";

export const startSubmissionCron = () => {
  cron.schedule("*/1 * * * *", async () => {
    console.log("Running submission cron...");

    const users = await User.find();

    for (let user of users) {
      await fetchCFSubmissions(user.codeforcesHandle, user._id);

      emitActivity({
        message: `${user.name} new submission fetched`,
      });
    }
  });
  console.log("🔥 CRON RUNNING...");
};