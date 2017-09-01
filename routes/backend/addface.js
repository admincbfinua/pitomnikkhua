var Face = require('../../models/backend/face').model;
var mongoose = require('../../libs/mng');

exports.post = function(req,res,next){
	if(req.user)
	{
		
		
		var fnames = '';
		//if(!req.files.foto) return res.status(400).send('Нет файла для загрузки');
		if(req.files.foto)
		{
			req.files.foto.mv( __dirname + '/../../public/images/face/' + req.files.foto.name ,function(err){
			if(err) {return res.status(500).send('Ошибка загрузки файла, файл с таким именем уже существует');}
				
			});
			fnames = req.files.foto.name;
		}
		var fio = req.body.fio;
		var dolz = req.body.dolz;
		var phone = req.body.phone;
				
				
		var fac = new Face({
				fio: fio,
				dolz: dolz,
				phone:phone,
				foto:fnames
				});
				
				
				
			fac.save(function(err,fac,affected){
				
				if(err) return next(err);
				
				 res.redirect('../../backend/face');
				
			});
		
		
	}
	else
	{
		res.send('Вы не авторизованы')
	}
};