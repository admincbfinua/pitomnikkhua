var Reshenia = require('../../models/backend/reshenia').model;
exports.get = function(req,res,next){
	if(req.user)
	{
		var id = req.params.id;
		Reshenia.find({_id:id},function(err,resh){
		if(err) return next(err);
			res.render('backend/editshablondocs',{title:'Админ панель',data:resh});
			
		});
		
	}
	else
	{
		res.send('Вы не авторизованы')
	}
	
};