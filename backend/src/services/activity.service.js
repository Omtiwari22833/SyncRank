import Activity from "../models/activity.model.js";

export const getRecentActivities = async () => {
  return Activity.find().sort({ timestamp: -1 }).limit(50);
};