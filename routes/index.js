var express = require('express');
var router = express.Router();

var posts = require('../database/posts.json')

/* GET home/index page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', (req, res) => res.send(posts))

router.get('/:id', (req, res) => {
    id = req.params.id
    let post = posts.find(post => post.id === parseInt(id))
    res.send(post)
})

router.post('/', (req, res) => {
    posts.push(req.body)
    res.send(req.body);
})

router.delete('/', (req, res) => {
    let post = posts.findIndex(post => post.id === parseInt(req.body.id))
    if(!post){
        res.send('Not Found')
    } else {
        posts.splice(post,1)
        // delete posts[post]
        res.send(posts)
    }
})

router.put('/:id', (req, res) => {
    let id = req.params.id
    let post = posts.find(post => post.id === parseInt(id))

    if(!post){
        return res.send("not Found")
    } else {
        Object.assign(post,req.body,{})
        res.send("Post Updated")
    }
})

module.exports = router;