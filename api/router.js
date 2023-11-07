import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  const taskLists = await getTask();
  res.json({
    status: "success",
    message: "still to do",
  });
});
router.post("/", (req, res) => {
  console.log(req.body);
  res.json({
    status: "success",
    message: "still to do",
  });
});
router.patch("/", (req, res) => {
  console.log(req.body);
  res.json({
    status: "success",
    message: "still to do",
  });
});

router.delete("/", async (req, res) => {});
export default router;
