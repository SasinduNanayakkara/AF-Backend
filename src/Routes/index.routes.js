import { Router } from "express";
import ClientRoutes from "./Client.routes";
import ConsultantRoutes from "./Consultant.routes";
import ArticleRoutes from "./Article.routes";
import AdminRoutes from "./Admin.routes";
import LoginRoutes from "./Login.routes";

const router = Router();

router.use("/client", ClientRoutes);
router.use("/consultant", ConsultantRoutes);
router.use("/article", ArticleRoutes);
router.use("/admin", AdminRoutes);
router.use("/login", LoginRoutes);

export default router;