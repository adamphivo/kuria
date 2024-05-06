import { Router } from "express";
import TasksRoutes from "@/features/tasks/routes";
import NotesRoutes from "./features/notes/routes";

const Routes = Router();

Routes.use("/tasks", TasksRoutes);
Routes.use("/notes", NotesRoutes);

export default Routes;
