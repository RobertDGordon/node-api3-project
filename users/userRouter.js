const express = require('express');

const Posts = require('./userDb.js');

const middleware = require('../middleware/index.js');

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

router.post('/', middleware.validateUser('name'), (req, res) => {
  Posts.insert(req.body)
    .then(post => {
      res.status(201).json(post);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "There was an error while saving the post to the database",
      });
    });
});

router.delete('/:id', (req, res) => {
  Posts.delete(req.params.id)
  .then(count => {
    if (count > 0) {
      res.status(200).json({ message: 'The user has been removed' });
    } else {
      res.status(404).json({ message: 'The user could not be found' });
    }
  })
  .catch(error => {
    // log error to server
    console.log(error);
    res.status(500).json({
      message: 'Error removing the user',
    });
  });
});

router.put('/:id', (req, res) => {
  Posts.update(req.params.id, req.body)
  .then(user => {
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'The user could not be found' });
    }
  })
  .catch(error => {
    // log error to server
    console.log(error);
    res.status(500).json({
      message: 'Error updating the user',
    });
  });
});

module.exports = router;
