var express = require('express');
var router = express.Router();
var BlogPost = require('../models/blogPost');

router.get('/posts', function(req, res){
  BlogPost.find(function(err, posts){
    if(err){
      res.send(err);
    }
    res.json(posts);
  });
});

router.post('/post', function(req, res){
  var newPost = new BlogPost({
    author: req.body.author,
    title: req.body.title,
    content: req.body.content,
    done: false
  });
  newPost.save(function(err, post){
    if(err){
      res.send(err);
    }
    BlogPost.find(function(err, posts){
      if(err){
        res.send(err);
      }
      res.json(posts);
    });
  });
});

module.exports = router;
