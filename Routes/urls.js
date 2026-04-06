import express from "express";
import { SaveURL } from "../Controllers/SaveURL.js";
import { RedirectURL } from "../Controllers/RedirectURL.js";
import { GetAllURLs } from "../Controllers/GetAllURLs.js";
import { DeleteURL } from "../Controllers/DeleteURL.js";

const router = express.Router();

router.post("/save", SaveURL);
router.get("/urls", GetAllURLs);
router.delete("/urls/:shortId", DeleteURL);
router.get("/:shortId", RedirectURL);

export default router;
