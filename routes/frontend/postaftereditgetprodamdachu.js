var Uchastki = require('../../models/frontend/uchastki').model;
var mongoose = require('../../libs/mng');
var validator = require('validator'); 
exports.post = function(req,res,next){
	if(req.suser)
	{
		var num_uc = req.body.num_uc;
		var naim_tov = req.body.naim_tov;
		var opis_uc = req.body.opis_uc;
		var plosh_uc = req.body.plosh_uc;
		var price = req.body.price;
		var contact_phone = req.body.contact_phone;
		var contact_fio = req.body.contact_fio;
		
		var setField = { 
				num_uc: validator.escape(num_uc),
				naim_tov: validator.escape(naim_tov),
				opis_uc: validator.escape(opis_uc),
				plosh_uc: validator.escape(plosh_uc),
				price: validator.escape(price),
				contact_phone:validator.escape(contact_phone),
				contact_fio: validator.escape(contact_fio)
		}
		
		
		
		
		Uchastki.findOneAndUpdate({"_id":req.params.id}, setField, {upsert:true}, function(err, results){
			if(err){return next(err);}
			else
			{
				res.redirect('../../prodamdachu');
			}

			});	
		
	}
	else
	{
		res.send('Вы не авторизованы')
	}
	
};