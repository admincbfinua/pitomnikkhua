var Reshenia = require('../../models/backend/reshenia').model;
var mongoose = require('../../libs/mng'); 

exports.post = function(req,res,next){
	if(req.user)
	{
		var setField = { 
		povestka : req.body.povestka,
		ktoprovodit : req.body.ktoprovodit,
		fulldescr : req.body.fulldescr,
		reshenie : req.body.reshenie
		}
		
		
		
		
		Reshenia.findOneAndUpdate({"_id":req.params.id}, setField, {upsert:true}, function(err, results){
			if(err){return next(err);}
			else
			{
				res.redirect('/../backend/shablondocs');
			}

			});		
	

	
	}
	else
	{
		res.send('Вы не авторизованы')
	}
};