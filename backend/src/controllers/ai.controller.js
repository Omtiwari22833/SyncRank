import { analyzeWeakness } from "../services/ai.service.js";

export const analyze = async (req, res, next) => {
  try {
    const data = await analyzeWeakness(req.params.userId);
    res.json(data);
  } catch (err) {
    next(err);
  }
};