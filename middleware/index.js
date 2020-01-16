function validateUser(field) {
	return function (req, res, next){
    console.log('validateUser:', req.body[field])
		if (req.body[field]){
			next();
		}else if (!req.body[field]) {
			res.status(400).json({ errorMessage: `Missing required ${field} field`})
		}else {
			res.status(400).json({ errorMessage: 'Missing required user data'})
		}
	}
}
  
function validateUserId(field) {
	return function (req, res, next){
    console.log('validateUserId:', req.body[field])
		if (req.body[field]){
			next();
		}else if (!req.body[field]) {
			res.status(400).json({ errorMessage: `Missing required ${field} field`})
		}else {
			res.status(400).json({ errorMessage: 'Missing required user data'})
		}
	}
}

function validatePost() {
	return function (req, res, next){
    console.log('validatePost:', req.body)
		if (req.body.text){
			next();
		}else if (!req.body.text) {
			res.status(400).json({ errorMessage: `Missing required text field`})
		}else {
			res.status(400).json({ errorMessage: 'Missing required user data'})
		}
	}
}

module.exports = {validateUserId, validateUser, validatePost};