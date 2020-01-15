function validateUserId(req, res, next) {
    if (req.id){
      req.user = req.id;
      next()
    }else{
      res.status(400).json({ message: 'Invalid user id'})
    }
  }
  
  function validateUser(res, req, next) {
    if (req.body){
      next()
    }else if (req.body && !req.body.name) {
      res.status(400).json({ message: 'Missing required name field'})
    }else {
      res.status(400).json({ message: 'Missing required user data'})
    }
  }
  
  function validatePost(res, req, next) {
    if (req.body){
      next()
    }else if (req.body && !req.body.text) {
      res.status(400).json({ message: 'Missing required text field'})
    }else {
      res.status(400).json({ message: 'Missing required post data'})
    }
  }

  module.exports = validateUserId, validateUser, validatePost;