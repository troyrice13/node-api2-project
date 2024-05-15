// implement your posts router here
const express = require ('express')
const router = express.Router();
const Post = require('./posts-model')

router.get('/', (req, res) => {
    Post.find()
        .then(posts => {
            res.json(posts)
        })
});

router.get('/:id', (req, res) => {

});

router.post('/', (req, res) => {

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.get('/:id/comments', (req, res) => {

});



module.exports = router