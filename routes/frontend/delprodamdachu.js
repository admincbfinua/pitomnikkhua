var Uchastki = require('../../models/frontend/uchastki').model;
var mongoose = require('../../libs/mng'); 
exports.get = function(req,res,next){
	if(req.suser)
	{
		
		var id = req.params.id; 
		Uchastki.remove({_id: id},function(err,rows){
			if(err) return next(err);
			res.redirect('/../prodamdachu');
		})
		
	}
	else
	{
		res.send('Вы не авторизованы')
	}
	
};
