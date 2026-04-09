import { URLs } from "../Models/url.js";
import { getCache } from "../Utils/redis.js";

export const RedirectURL = async (req, res) => {
  const { shortId } = req.params;
  try {

    //cache  hit
    const longURlfromCache = await getCache(shortId);
    if(longURlfromCache){
      res.redirect(element.longUrl);
      return;
    }

    //cache miss

    const resUrls = await URLs.find({ shortId: shortId });
    const element = resUrls[0];
    console.log(element);

    res.redirect(element.longUrl);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      ok: false,
    });
  }
};
