import { Router } from "express";
import * as AnnouncementController from "../Controllers/Announcemnt.controller";
import { verifyToken } from "../Utils/verifyToken";


const router = Router();

router.post("/",verifyToken, AnnouncementController.addAnnouncement);
router.get("/", AnnouncementController.getAnnouncements);
router.get("/:id", AnnouncementController.getOneAnnouncement);
router.put("/:id",verifyToken, AnnouncementController.updateAnnouncement);
router.delete("/:id", AnnouncementController.deleteAnnouncement);

export default router;