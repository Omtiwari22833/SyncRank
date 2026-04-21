import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  message: String,
  problemName: String,
  difficulty: String,

  timestamp: {
    type: Number,
    default: () => Math.floor(Date.now() / 1000),
  },
});

export default mongoose.model("Activity", activitySchema);