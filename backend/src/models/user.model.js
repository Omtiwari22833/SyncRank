import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    codeforcesHandle: String,
    leetcodeHandle: String,

    stats: {
      totalSolved: { type: Number, default: 0 },
      streak: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);