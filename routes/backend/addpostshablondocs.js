var Reshenia = require('../../models/backend/reshenia').model;
var mongoose = require('../../libs/mng'); 

exports.post = function(req,res,next){
	if(req.user)
	{
		var povestka = req.body.povestka;
		var ktoprovodit = req.body.ktoprovodit;
		var fulldescr = req.body.fulldescr;
		var reshenie = req.body.reshenie;
		
		var resh = new Reshenia({
		povestka: povestka,
		ktoprovodit: ktoprovodit,
		fulldescr:fulldescr,
		reshenie:fulldescr
		});
	resh.save(function(err,resh,affected){
		//mongoose.disconnect();  
		if(err) return next(err);
		
		 res.redirect('../../backend/shablondocs');
		
	});
	}
	else
	{
		res.send('Вы не авторизованы')
	}
};