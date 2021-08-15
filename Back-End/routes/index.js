const express = require('express');
const charactersRouter = require('./charactersRoutes');
const comicsRouter = require('./comicsRoutes');

const router = express.Router();

router.use(charactersRouter);
router.use(comicsRouter);

module.exports = router;