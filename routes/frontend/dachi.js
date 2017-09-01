var Uchastki = require('../../models/frontend/uchastki').model;
var dateFormat = require('dateformat');
exports.get = function(req,res,next){
	var result='';
	
	Uchastki.find({},function(err,result){
		if(err) return next(err);
			res.render('frontend/page',{title:'Дачи участки на продажу Харьков Питомник',description:'Дачи участки на продажу Харьков Питомник',keywords:'',url:req.url,content:result,dateFormat:dateFormat});
			
		});
	
	
};