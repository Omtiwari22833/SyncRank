import Submission from "../models/submission.model.js";

export const getLeaderboard = async () => {
  const last7 = Math.floor(Date.now() / 1000) - 7 * 24 * 60 * 60;

  return await Submission.aggregate([
    { $match: { timestamp: { $gte: last7 }, verdict: "OK" } },
    {
      $group: {
        _id: "$userId",
        solved: { $sum: 1 },
      },
    },
    { $sort: { solved: -1 } },
  ]);
};