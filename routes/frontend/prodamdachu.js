var Uchastki = require('../../models/frontend/uchastki').model;
var mongoose = require('../../libs/mng'); 
exports.get = function(req,res,next){
	if(req.suser)
	{
		content="";
		Uchastki.find({},function(err,rows){
			if(err) return next(err);
			res.render('frontend/page',{title:'Выставить дачу на продажу Питомник Харьков',description:'Дачи выставленные на продажу Питомник Харьков',keywords:'',url:req.url,content:content,data:rows,method:req.method});
		})
		
	}
	else
	{
		res.send('Вы не авторизованы')
	}
	
};