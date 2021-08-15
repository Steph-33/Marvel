const express = require('express');
const charactersController = require('../controllers/charactersController');

const charactersRouter = express();

// Route pour récupérer un personnage par son id
charactersRouter.get('/characters/:id', charactersController.getCharacterById);

// Route pour récupérer l'ensemble des personnages
charactersRouter.get('/characters', charactersController.getAllCharacters);

// Route pour récupérer les comics d'un personnage par son id
charactersRouter.get('/characters/:id/comics', charactersController.getComicsCharacter);

module.exports = charactersRouter;