var Uchastki = require('../../models/frontend/uchastki').model;
var mongoose = require('../../libs/mng'); 
exports.get = function(req,res,next){
	if(req.suser)
	{
		content="";
		var id = req.params.id;
		Uchastki.find({_id:id},function(err,rows){
			if(err) return next(err);
			res.render('frontend/page',{title:'Редактирование информации по даче на продажу Питомник Харьков',description:'Редактирование информации по даче выставленной на продажу Питомник Харьков',keywords:'',url:req.url,content:content,data:rows,method:req.method});
		})
		
	}
	else
	{
		res.send('Вы не авторизованы')
	}
	
};