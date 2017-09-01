var Novosti = require('../../models/backend/novosti').model;
var mongoose = require('../../libs/mng'); 

exports.post = function(req,res,next){
	if(req.user)
	{
		var setField = { 
		name : req.body.name,
		full : req.body.full,
		vazn : req.body.vazn
		}
		
		
		
		
		Novosti.findOneAndUpdate({"_id":req.params.id}, setField, {upsert:true}, function(err, results){
			if(err){return next(err);}
			else
			{
				res.redirect('/../backend/news');
			}

			});		
	

	
	}
	else
	{
		res.send('Вы не авторизованы')
	}
};