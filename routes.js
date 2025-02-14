const { Router } = require("express");
const { StatusCodes } = require("http-status-codes");
const { getDocs, collection } = require("firebase/firestore");

const { db } = require("./firebase");

const router = Router();

router.post("/new", (req, res) => {});

router.get("/collections", async (req, res) => {
  const data = [];

  const querySnapshot = await getDocs(collection(db, req.query.name));

  querySnapshot.forEach(doc => {
    data.push({ id: doc.id, ...doc.data() });
  });

  res.status(StatusCodes.OK).json({ data });
});

module.exports = router;
