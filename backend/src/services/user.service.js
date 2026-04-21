import User from "../models/user.model.js";
import { apiFetch } from "../utils/apiFetch.js";

const validateCF = async (handle) => {
  if (!handle) return true;

  const res = await apiFetch(
    `https://codeforces.com/api/user.info?handles=${handle}`
  );

  return res?.status === "OK";
};

export const createUser = async (data) => {
  const exists = await User.findOne({ email: data.email });
  if (exists) throw new Error("User already exists");

  const valid = await validateCF(data.codeforcesHandle);
  if (!valid) throw new Error("Invalid Codeforces handle");

  return await User.create(data);
};

export const getAllUsers = () => User.find();

export const getUserById = async (id) => {
  const user = await User.findById(id);
  if (!user) throw new Error("User not found");
  return user;
};