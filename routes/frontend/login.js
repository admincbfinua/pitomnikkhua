var User = require('../../models/frontend/user').model; 
var async = require('async');
exports.get = function(req,res){
	res.render('frontend/login',{title: 'Авторизация Дачный массив Харьков Питомник', description :'', keywords:''});
};

exports.post = function(req,res,next){
	var username = req.body.name;
	var password = req.body.password;
	
	async.waterfall([
		function(callback){
			User.findOne({username:username},callback);
		},
		function(user,callback){
			if(user)
			{
				if(user.checkPassword(password)){
					callback(null,user);
				}
				else
				{
					res.send('403 Доступ запрещен. Имя пользователя и пароль не распознаны.');	
				}
			}
			else
			{
				var user = new User({username: username,password:password});
				user.save(function(err){
				if(err) return next(err);
				// 200
				callback(null,user);	
				});	
			}		
		}
	],function(err, user){
		if(err) return next(err);
		req.session.user = user._id;
		res.redirect('/');
	})
	
};
