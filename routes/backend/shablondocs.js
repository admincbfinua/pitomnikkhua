var Reshenia = require('../../models/backend/reshenia').model;
exports.get = function(req,res,next){
	if(req.user)
	{
		Reshenia.find({},function(err,resh){
		if(err) return next(err);
			res.render('backend/shablondocs',{title:'Админ панель',data:resh});
		
		});
		
	}
	else
	{
		res.send('Вы не авторизованы')
	}
	
};