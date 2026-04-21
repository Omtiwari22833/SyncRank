import { getLeaderboard } from "../services/leaderboard.service.js";

export const leaderboard = async (req, res, next) => {
  try {
    const data = await getLeaderboard();
    res.json(data);
  } catch (err) {
    next(err);
  }
};