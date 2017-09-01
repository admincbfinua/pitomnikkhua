exports.get = function(req,res,next){
	var content='Типовые завления и бланки заявлений в процеесе внесения в систему';
	res.render('frontend/page',{title:'Шаблоны документов и заявлений садового товарищества Питомник',description:'Шаблоны документов и заявлений садового товарищества Питомник',keywords:'',url:req.url,content:content});
	
};