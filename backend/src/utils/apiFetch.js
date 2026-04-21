import axios from "axios";

export const apiFetch = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    console.error("API Error:", err.message);
    return null;
  }
};