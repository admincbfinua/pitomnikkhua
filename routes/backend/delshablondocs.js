var Reshenia = require('../../models/backend/reshenia').model;

exports.get = function(req,res,next){
	if(req.user)
	{
		var id = req.params.id; 
		Reshenia.remove({_id: id},function(err,resh){
		if(err) return next(err);
			res.redirect('/../backend/shablondocs');
		
		});
		
		
		
	}
	else
	{
		res.send('Вы не авторизованы')
	}
	
};
