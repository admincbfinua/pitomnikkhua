var Novosti = require('../../models/backend/novosti').model;
var mongoose = require('../../libs/mng'); 

exports.post = function(req,res,next){
	if(req.user)
	{
		var name = req.body.name;
		var full = req.body.full;
		var vazn = req.body.vazn;
		
		
		var nov = new Novosti({
		name: name,
		full:full,
		vazn:vazn
		});
	nov.save(function(err,nov,affected){
		//mongoose.disconnect();  
		if(err) return next(err);
		
		 res.redirect('../../backend/news');
		
	});
	}
	else
	{
		res.send('Вы не авторизованы')
	}
};