import { apiFetch } from "../utils/apiFetch.js";

export const getUpcomingContests = async () => {
  const data = await apiFetch(
    "https://codeforces.com/api/contest.list"
  );

  return data?.result?.filter((c) => c.phase === "BEFORE");
};