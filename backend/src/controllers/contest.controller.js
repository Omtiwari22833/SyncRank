import { getUpcomingContests } from "../services/contest.service.js";

export const getContests = async (req, res, next) => {
  try {
    res.json(await getUpcomingContests());
  } catch (err) {
    next(err);
  }
};