import { Router } from "express";
import * as LoginController from "../Controllers/Login.controller";

const router = Router();

router.post("/", LoginController.login);
router.get("/google", LoginController.loginGoogle);
router.get("/google/callback", LoginController.googleCallback);
router.get("/google/success", LoginController.googleAuthSuccess);

export default router;