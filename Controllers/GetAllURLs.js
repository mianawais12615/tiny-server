import { URLs } from "../Models/url.js";

export const GetAllURLs = async (req, res) => {
  try {
    const urls = await URLs.find().sort({ _id: -1 }).limit(5);
    res.status(200).json({ ok: true, urls });
  } catch (err) {
    console.log(err);
    res.status(500).json({ ok: false });
  }
};
