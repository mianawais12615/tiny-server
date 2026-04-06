import { URLs } from "../Models/url.js";

export const DeleteURL = async (req, res) => {
  const { shortId } = req.params;
  try {
    await URLs.findOneAndDelete({ shortId });
    res.status(200).json({ ok: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ ok: false });
  }
};
