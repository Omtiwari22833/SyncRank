import { startSubmissionCron } from "../cron/submission.cron.js";

const startCronJobs = () => {
  console.log("Starting cron jobs...");
  startSubmissionCron();
};

export default startCronJobs;