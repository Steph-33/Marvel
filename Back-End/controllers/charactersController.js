require('dotenv').config()
const fetch = require("node-fetch");
const md5 = require('md5');

module.exports = {

    // Récupération d'un personnage par son id
    getCharacterById: async (request, response) => {
        const date = new Date();
        const timestamp = date.getTime() / 1000; // 1000 pour convertir des millisecondes en
        // secondes
        const hash = md5(timestamp + process.env.API_PRIVATE_KEY + process.env.API_PUBLIC_KEY)
        const url = `https://gateway.marvel.com:443/v1/public/characters/${request.params.id}?ts=${timestamp}&apikey=${process.env.API_PUBLIC_KEY}&hash=${hash}`;

        await fetch(url)
            .then(async (res) => {
                let character = await res.json();
                return await response.status(200).json({
                    // id: characterFound.id,
                    // nom: characterFound.name,
                    // description: characterFound.description,
                    character
                })
            })
            .catch(() => {
                return response.status(404).json({
                    error: `Aucun personnage avec l'id n°${request.params.id} n'a été trouvé.`
                })
            })
    },

    // Récupération de tous les personnages
    getAllCharacters: async (request, response) => {
        const date = new Date();
        const timestamp = date.getTime() / 1000; // 1000 pour convertir des millisecondes en
        // secondes
        console.log(Math.floor(timestamp)); // va afficher qqchose comme 1582129584.
        const hash = md5(timestamp + process.env.API_PRIVATE_KEY + process.env.API_PUBLIC_KEY)
        console.log('hash', hash);
        const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${process.env.API_PUBLIC_KEY}&hash=${hash}`;

        const result = await fetch(url)
            .then(async (res) => {
                let characters = await res.json();
                console.log('characters=======>', characters)
                return characters;
            })
            .catch(() => {
                return response.status(404).json({
                    error: `Les personnages n'ont pas pu être récupérés.`
                })
            })
        return response.status(200).json(result);
    },

    // Récupération des comics par l'id du personnage
    getComicsCharacter: async (request, response) => {
        const date = new Date();
        const timestamp = date.getTime() / 1000; // 1000 pour convertir des millisecondes en
        // secondes
        console.log(Math.floor(timestamp)); // va afficher qqchose comme 1582129584.
        const hash = md5(timestamp + process.env.API_PRIVATE_KEY + process.env.API_PUBLIC_KEY)
        console.log('hash', hash);
        const url = `https://gateway.marvel.com:443/v1/public/characters/${request.params.id}/comics?ts=${timestamp}&apikey=${process.env.API_PUBLIC_KEY}&hash=${hash}`;

        const result = await fetch(url)
            .then(async (res) => {
                let characters = await res.json();
                return characters;
            })
            .catch(() => {
                return response.status(404).json({
                    error: `Les personnages n'ont pas pu être récupérés.`
                })
            })
        return response.status(200).json(result);
    }
};