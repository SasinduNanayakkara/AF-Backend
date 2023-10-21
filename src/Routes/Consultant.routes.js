import { Router } from "express";
import * as ConsultantController from "../Controllers/Consultant.controller";
import { verifyToken } from "../Utils/verifyToken";

const router = Router();

router.post("/",verifyToken, ConsultantController.addConsultant);
router.get("/",verifyToken, ConsultantController.getConsultants);
router.get("/:id",verifyToken, ConsultantController.getOneConsultant);
router.put("/:id",verifyToken, ConsultantController.updateConsultant);
router.delete("/:id",verifyToken, ConsultantController.deleteConsultant);
router.put("/status/:id",verifyToken, ConsultantController.updateConsultantStatus);

export default router;