var Uchastki = require('../../models/frontend/uchastki').model;
var mongoose = require('../../libs/mng'); 
var rand_name = require('../../middleware/randomName'); 
var crypto = require('crypto');
var validator = require('validator');
exports.post = function(req,res,next){
	if(req.suser)
	{
		
		
		if(!req.files.photo) return res.status(400).send('Нет файла для загрузки');
					
			let sampleFile = req.files.photo;
			var rash_file="";
			if( typeof (sampleFile.length)=="undefined")
			{
				if(typeof (sampleFile.mimetype)!="underfined")
				{
					if(sampleFile.mimetype=="image/png")
					{
						var rash_file=".png";
						
					}
					else if(sampleFile.mimetype=="image/jpeg")
					{
						var rash_file=".jpg";
					}
					else if(sampleFile.mimetype=="image/gif")
					{
						var rash_file=".gif";
					}
					else
					{
						var rash_file="";
					}
				}
				if(rash_file!='')
				{
					var filename = rand_name()+rash_file;
					sampleFile.mv( '/var/www/pitomnikkhua/public/images/prodamdachi/' + filename,function(err){
					if (err)
					return res.status(500).send(err);
	 
					});
				}
			}
			else
			{
			
				//загружено нескольно картинок
				var filename = [];
				var rash_file = '';
				sampleFile.forEach(function(detail,i){
					if(typeof (detail.mimetype)!="underfined")
					{
						if(detail.mimetype=="image/png")
						{
							var rash_file=".png";
							
						}
						else if(detail.mimetype=="image/jpeg")
						{
							var rash_file=".jpg";
						}
						else if(detail.mimetype=="image/gif")
						{
							var rash_file=".gif";
						}
						else
						{
							var rash_file="";
						}
					}
						if(rash_file !='')
						{	
							filename[i] = rand_name()+rash_file;
							detail.mv( '/var/www/pitomnikkhua/public/images/prodamdachi/' + filename[i],function(err){
							if (err)
							return res.status(500).send(err);
							});
						}
				})
			}
				
				var num_uc = req.body.num_uc;
				var naim_tov = req.body.naim_tov;
				var opis_uc = req.body.opis_uc;
				var plosh_uc = req.body.plosh_uc;
				var price = req.body.price;
				var contact_phone = req.body.contact_phone;
				var contact_fio = req.body.contact_fio;
				if(filename instanceof Array)
				{
					filename =  filename.join();
				}
				var uc = new Uchastki({
				num_uc: validator.escape(num_uc),
				num_user_add:req.suser.id,
				naim_tov: validator.escape(naim_tov),
				opis_uc: validator.escape(opis_uc),
				plosh_uc: validator.escape(plosh_uc),
				price: validator.escape(price),
				contact_phone:validator.escape(contact_phone),
				contact_fio: validator.escape(contact_fio),
				foto:filename
				});
				
				uc.save(function(err,uc,affected){
				if(err) return next(err);
				res.redirect('../../prodamdachu');
				});
			
	}
	else
	{
		res.send('Вы не авторизованы')
	}
};