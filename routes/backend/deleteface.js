var Face = require('../../models/backend/face').model;

exports.get = function(req,res,next){
	if(req.user)
	{
		var id = req.params.id; 
		Face.remove({_id: id},function(err,resh){
		if(err) return next(err);
			res.redirect('/../../../backend/face');
		
		});
		
		
		
	}
	else
	{
		res.send('Вы не авторизованы')
	}
	
};
