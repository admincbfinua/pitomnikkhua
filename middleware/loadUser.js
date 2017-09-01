var User = require('../models/frontend/user').model; 
module.exports = function(req,res,next){
	req.suser = res.locals.suser = null;
	if(!req.session.user) return next();
	User.findById(req.session.user, function(err,user){
		if(err) return next(err);
		req.suser = res.locals.suser = user;
		next();
		})
};