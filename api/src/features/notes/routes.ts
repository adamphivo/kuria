import { Router } from "express";
import * as controllers from "@/features/notes/controllers";

const NotesRoutes = Router();

NotesRoutes.get("/", controllers.getNotes);

export default NotesRoutes;
