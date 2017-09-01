var Face = require('../../models/backend/face').model;
var mongoose = require('../../libs/mng'); 
exports.get = function(req,res,next){
	if(req.user)
	{
		Face.find({},function(err,rows){
			if(err) return next(err);
			res.render('backend/face',{title:'Админ панель',data:rows});
		})
		
	}
	else
	{
		res.send('Вы не авторизованы')
	}
	
};