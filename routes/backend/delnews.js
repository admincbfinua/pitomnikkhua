var Novosti = require('../../models/backend/novosti').model;

exports.get = function(req,res,next){
	if(req.user)
	{
		var id = req.params.id; 
		Novosti.remove({_id: id},function(err){
		if(err) return next(err);
			res.redirect('/../backend/news');
		
		});
		
		
		
	}
	else
	{
		res.send('Вы не авторизованы')
	}
	
};
