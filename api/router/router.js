import express from "express";

const router = express.Router();

//All Routes
router.get("/", (req, res) => {
  res.send("Hello World!");
});

export default router;
