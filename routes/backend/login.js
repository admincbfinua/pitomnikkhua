var Administrators = require('../../models/backend/admuser').model; 
exports.get = function(req,res){
	res.render('backend/login',{title:'Страница авторизации'});
};

exports.post = function(req,res,next){
	var username = req.body.name;
	var password = req.body.password;
	
	Administrators.findOne({username:username},function(err,user){
		if(err) return next(err);
		if(user)
		{
			if(user.checkPassword(password))
			{
				//200
				req.session.user = user._id;
				//res.send('200' + req.session.user);
				res.redirect('/backend/index');
			}
			else
			{
				//403 forbidden
				res.send('403 Доступ запрещен. Имя пользователя и пароль не распознаны.');
			}
		}
		else
		{
			next(err);
		}
		
	});
};
