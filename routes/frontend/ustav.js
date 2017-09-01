exports.get = function(req,res,next){
	var content='Документы в процессе внесения на страницы сайта';
	res.render('frontend/page',{title:'Устав садового товарищества Питомник',description:'Устав садового товарищества Питомник',keywords:'',url:req.url,content:content});
	
};