import express from "express";
import productCtrl from "../controllers/products.controller.js";

const router = express.Router();

router.param("Id", productCtrl.productByID);

router.route("/api/products").get(productCtrl.list);
router.route("/api/products").post(productCtrl.create);
router.route("/api/products").delete(productCtrl.removeAll);

router.route("/api/products/:Id").get(productCtrl.readbyID);
router.route("/api/products/:Id").put(productCtrl.updatebyID);
router.route("/api/products/:Id").delete(productCtrl.removebyID);

export default router;
