const { Router } = require('express');
const comments = require('../data/comment');
const router = Router();


const url = `http://localhost:8080`;

const getAllComments = (req, res) => {
    res.json(comments.map(({tradeid, ...reviewdate}) => ({
        ...reviewdate,
        link: `{url}/comments/${comments.tradeid}`
    })
    ));
}

const createComment = (req, res) => {
    const { comment } = req.body;
    console.log('====**', comment);

    comments.push(comment);
    console.log('====>', comments);
    return res.status(201).json({
        success: true,
        comment,
    });
}

router.get('/',getAllComments);

router.post('/', createComment);

module.exports = router;