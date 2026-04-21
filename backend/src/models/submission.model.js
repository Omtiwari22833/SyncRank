import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  platform: {
    type: String,
    enum: ["codeforces", "leetcode"],
  },

  problemName: String,
  difficulty: String,

  verdict: String,
  tags: [String],

  timestamp: Number,

  submissionId: {
    type: String,
    unique: true,
  },
});

export default mongoose.model("Submission", submissionSchema);