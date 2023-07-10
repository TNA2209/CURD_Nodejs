const express = require("express");
const router = express.Router();
const accountController = require("../controllers/accountController");
router.post("/register", accountController.registerAccount);
router.get("/find", accountController.findAccount);
router.get("/find/:id", accountController.findAccount);
router.put("/change/:id", accountController.updatePassword);
router.delete("/delete/:id", accountController.deleteAccount);
module.exports = router;
