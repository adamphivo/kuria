import { Router } from "express";
import * as controllers from "@/features/tasks/controllers";

const TasksRoutes = Router();

TasksRoutes.get("/", controllers.getTasks);

export default TasksRoutes;
