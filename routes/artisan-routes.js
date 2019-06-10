const { Router } = require('express');
// const shortId = require('shortid');
const artisans = require('../data/artisan');
const router = Router();
// const url = `http://localhost:1337`;
const url = `http://localhost:8080`;

const getAllArtisans = (req, res) => {
    res.json(artisans.map((artisan) => ({
        ...artisan,
        // image: `${url}/${artisan.image}`,
        link: `${url}/artisans/${artisan.id}`
    })));
}

router.get('/', getAllArtisans);

module.exports = router;