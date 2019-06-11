const { Router } = require("express");
const artisans = require("../data/artisan");
const comments = require("../data/comment");
const router = Router();
const url = `http://localhost:8080`;

const getAllArtisans = (req, res) => {
  const allArtisans = artisans.map(artisan => {
    const filteredComment = comments.filter(
      comment => comment.id === artisan.id
    );

    const ratingTotal = filteredComment
        .map(comment => comment.rating)
        .reduce((acc, curr) => (acc + parseInt(curr)), 0);
    const ratingAvg = ratingTotal / filteredComment.length;

    return {
        ...artisan,
        rating: ratingAvg.toFixed(1),
        reviewCount: filteredComment.length,
        link: `${url}/artisans/${artisan.id}`
    }
    
  });

  res.json(allArtisans);
};

router.get("/", getAllArtisans);

module.exports = router;
