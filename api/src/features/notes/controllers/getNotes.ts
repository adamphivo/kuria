import { RequestHandler } from "express";

export const getNotes: RequestHandler = async (req, res, next) => {
  try {
    res.json({ message: "toto" });
  } catch (e) {
    next(e);
  }
};
