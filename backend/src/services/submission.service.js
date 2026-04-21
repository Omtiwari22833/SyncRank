import Submission from "../models/submission.model.js";
import Activity from "../models/activity.model.js";
import { apiFetch } from "../utils/apiFetch.js";

export const fetchCFSubmissions = async (handle, userId) => {
  if (!handle) return;

  const data = await apiFetch(
    `https://codeforces.com/api/user.status?handle=${handle}`
  );

  if (!data || data.status !== "OK") return;

  const latestSubs = data.result.slice(0, 20);

  for (let sub of latestSubs) {
    try {
      const newSub = await Submission.create({
        userId,
        platform: "codeforces",
        problemName: sub.problem.name,
        difficulty: sub.problem.rating || "unknown",
        verdict: sub.verdict,
        tags: sub.problem.tags,
        timestamp: sub.creationTimeSeconds,
        submissionId: sub.id.toString(),
      });

      // Activity create
      if (sub.verdict === "OK") {
        await Activity.create({
          userId,
          message: `Solved ${sub.problem.name}`,
          problemName: sub.problem.name,
          difficulty: sub.problem.rating,
        });
      }

      return newSub;
    } catch {
      // duplicate ignore
    }
  }
console.log("Fetching submissions for:", handle);

};
