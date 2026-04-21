import Submission from "../models/submission.model.js";

export const analyzeWeakness = async (userId) => {
  const subs = await Submission.find({ userId }).limit(30);

  const stats = {};

  subs.forEach((s) => {
    s.tags.forEach((tag) => {
      if (!stats[tag]) stats[tag] = { total: 0, success: 0 };

      stats[tag].total++;
      if (s.verdict === "OK") stats[tag].success++;
    });
  });

  const weakness = Object.entries(stats)
    .map(([tag, val]) => ({
      tag,
      successRate: val.success / val.total,
    }))
    .sort((a, b) => a.successRate - b.successRate)
    .slice(0, 3);

  return weakness;
};