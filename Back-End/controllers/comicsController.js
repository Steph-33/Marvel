require('dotenv').config()
const fetch = require("node-fetch");
const md5 = require('md5');

module.exports = {

    // Récupération d'un comic par son id
    getComicById: async (request, response) => {
        const date = new Date();
        const timestamp = date.getTime() / 1000; // 1000 pour convertir des millisecondes en
        // secondes
        const hash = md5(timestamp + process.env.API_PRIVATE_KEY + process.env.API_PUBLIC_KEY)
        const url = `https://gateway.marvel.com:443/v1/public/comics/${request.params.id}?ts=${timestamp}&apikey=${process.env.API_PUBLIC_KEY}&hash=${hash}`;

        await fetch(url)
            .then(async (res) => {
                let comic = await res.json();
                return await response.status(200).json({
                    // id: comicFound.id,
                    // nom: comicFound.name,
                    // description: comicFound.description,
                    comic
                })
            })
            .catch(() => {
                return response.status(404).json({
                    error: `Aucun comics avec l'id n°${request.params.id} n'a été trouvé.`
                })
            })
    },

    // Récupération de tous les comics
    getAllComics: async (request, response) => {
        const date = new Date();
        const timestamp = date.getTime() / 1000; // 1000 pour convertir des millisecondes en
        // secondes
        const hash = md5(timestamp + process.env.API_PRIVATE_KEY + process.env.API_PUBLIC_KEY)
        console.log('hash', hash);
        const url = `https://gateway.marvel.com:443/v1/public/comics?ts=${timestamp}&apikey=${process.env.API_PUBLIC_KEY}&hash=${hash}`;
        const result = await fetch(url)

            .then(async (res) => {
                let comics = await res.json();
                return comics;
            })
            .catch(() => {
                return response.status(404).json({
                    error: `Les comics n'ont pas pu être récupérés.`
                })
            })
        return response.status(200).json(result);
    }
};