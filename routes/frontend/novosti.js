var Novosti = require('../../models/backend/novosti').model;
var dateFormat = require('dateformat');
exports.get = function(req,res,next){
	var result='';
	Novosti.find({},function(err,result){
		if(err) return next(err);
			res.render('frontend/page',{title:'Новости садового товарищества Питомник',description:'Новости садового товарищества Питомник',keywords:'',url:req.url,content:result,dateFormat:dateFormat});
			
		}).sort({"vazn":1,"created":1});
	
	
	//res.render('frontend/page',{title:'Новости садового товарищества Питомник',description:'Новости садового товарищества Питомник',keywords:'',url:req.url,content:content});
	
};