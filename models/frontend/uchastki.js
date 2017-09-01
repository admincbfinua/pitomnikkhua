var mongoose = require('../../libs/mng');
Schema = mongoose.Schema;

// установка схемы
var schema = new Schema({
    num_uc:{type:String},
	num_user_add:{type:String},
	naim_tov:{type:String},
	opis_uc:{type:String},
	contact_fio:{type:String},
	contact_phone:{type:String},
	price:{type:String},
	plosh_uc:{type:String},
	foto:{type:String},
	created:{type:Date,default:Date.now}
});
module.exports.model = mongoose.model('Uchastki',schema); 

