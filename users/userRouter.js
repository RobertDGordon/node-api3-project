const express = require('express');

const Posts = require('./userDb.js');

const validateUserId = require('../middleware');

const router = express.Router();
router.get('/', (req, res) => {
  Posts.get(req.query)
  .then(post => {
    res.status(200).json(post);
  })
  .catch(error => {
    // log error to server
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the Posts',
    });
  });
});

router.get('/:id', (req, res) => {
  Posts.getById(req.params.id)
  .then(post => {
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: 'post not found' });
    }
  })
  .catch(error => {
    // log error to server
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the post',
    });
  });
});

router.get('/:id/posts', (req, res) => {
  Posts.getUserPosts(req.params.id)
    .then(comment => {
      if (!comment) {
        res.status(404).json({ message: 'The post with the specified ID does not exist.' })
      } else {
        res.status(200).json(comment)
      }
    })
    .catch(error => {
      console.log('error on /:id/posts', error)
      res.status(500).json({
        message: 'The comments information could not be retrieved.'
      })
    })
});

router.post('/', (req, res) => {
  // do your magic!
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

// function validateUserId(req, res, next) {
//   // do your magic!
// }

// function validateUser(req, res, next) {
//   // do your magic!
// }

// function validatePost(req, res, next) {
//   // do your magic!
// }

module.exports = router;
