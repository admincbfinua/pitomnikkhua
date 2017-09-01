exports.get = function(req,res){
	if(req.user)
	{
		res.render('backend/index',{title:'Админ панель'});
	}
	else
	{
		res.send('Вы не авторизованы')
	}
	
};