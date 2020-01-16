function validateUser(field) {
	return function (req, res, next){
    console.log('validateUser:', req.body[field])
		if (req.body[field]){
			next();
		}else if (!req.body.name) {
			res.status(400).json({ errorMessage: 'Missing required name field'})
		}else {
			res.status(400).json({ errorMessage: 'Missing required user data'})
		}
	}
}
  
function validateUserId(prop) {
	return function (res, req, next) {
		if (req.body){
		  next();
		}else{
			res.status(400).json({ message: 'Invalid user id'})
		}
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

  module.exports = {validateUserId, validateUser, validatePost};