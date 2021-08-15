const express = require('express');
const comicsController = require('../controllers/comicsController');

const comicsRouter = express();

// Route pour récupérer un personnage par son id
comicsRouter.get('/comics/:id', comicsController.getComicById);

// Route pour récupérer l'ensemble des personnages
comicsRouter.get('/comics', comicsController.getAllComics);

module.exports = comicsRouter;