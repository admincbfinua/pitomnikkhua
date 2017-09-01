exports.get = function(req,res,next){
	if(req.user)
	{
		res.render('backend/addnews',{title:'Админ панель',data:''});
	}
	else
	{
		res.send('Вы не авторизованы')
	}
	
};
