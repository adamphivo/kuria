import { RequestHandler } from "express";
import prisma from "@/clients/prisma";

export const getTasks: RequestHandler = async (req, res, next) => {
  try {
    const tasks = await prisma.task.count();

    res.json({ message: "success !", tasks });
  } catch (e) {
    next(e);
  }
};
