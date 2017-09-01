var Reshenia = require('../../models/backend/reshenia').model;
var dateFormat = require('dateformat');
exports.get = function(req,res,next){
	var content='';
	Reshenia.find({},function(err,resh){
		if(err) return next(err);
			res.render('frontend/page',{title:'Отчеты собраний садового товарищества Питомник',description:'Отчеты собраний садового товарищества Питомник',keywords:'',url:req.url,content:resh,dateFormat:dateFormat});
		
		});
	
	
	
};