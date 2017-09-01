exports.get = function(req,res,next){
	var content='Данные по оплате за свет в процессе внесения';
	res.render('frontend/page',{title:'Свет и электричество садового товарищества Питомник',description:'Свет и электричество садового товарищества Питомник',keywords:'',url:req.url,content:content});
	
};