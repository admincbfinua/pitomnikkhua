var Reshenia = require('../../models/backend/reshenia').model;
var mongoose = require('../../libs/mng'); 




exports.get = function(req,res,next){
	if(req.user)
	{
		res.render('backend/addshablondocs',{title:'Админ панель',data:''});
	}
	else
	{
		res.send('Вы не авторизованы')
	}
	
};
