var mongoose = require('../../libs/mng');
Schema = mongoose.Schema;

 
// установка схемы
var schema = new Schema({
    fio:{
	type: String,
    required:true
	},
	dolz:{
	type: String
	},
	phone:{
	type:String
	},
	foto:{
	type:String
	},
	created:{
	type:Date,
	default:Date.now
	}
});
module.exports.model = mongoose.model('face',schema); 

