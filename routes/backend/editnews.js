var Novosti = require('../../models/backend/novosti').model;
exports.get = function(req,res,next){
	if(req.user)
	{
		var id = req.params.id;
		Novosti.find({_id:id},function(err,resh){
		if(err) return next(err);
			res.render('backend/editnews',{title:'Админ панель',data:resh});
			
		});
		
	}
	else
	{
		res.send('Вы не авторизованы')
	}
	
};