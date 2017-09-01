exports.get = function(req,res,next){
	var content='Подробный график подачи воды по товариществам и линиям в процессе разработки';
	res.render('frontend/page',{title:'Водоснабжение садового товарищества Питомник',description:'Водоснабжение садового товарищества Питомник',keywords:'',url:req.url,content:content});
	
};