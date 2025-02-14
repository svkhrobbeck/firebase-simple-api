const { Router } = require("express");

const { getCollections, newDocument } = require("./controllers");

const router = Router();

router.post("/new-doc", newDocument);

router.get("/collections", getCollections);

module.exports = router;
