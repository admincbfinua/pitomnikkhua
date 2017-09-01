var Novosti = require('../../models/backend/novosti').model;
var mongoose = require('../../libs/mng'); 
exports.get = function(req,res,next){
	if(req.user)
	{
		Novosti.find({},function(err,rows){
			if(err) return next(err);
			res.render('backend/news',{title:'Админ панель',data:rows});
		})
		
	}
	else
	{
		res.send('Вы не авторизованы')
	}
	
};