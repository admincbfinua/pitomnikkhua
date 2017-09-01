var crypto = require('crypto');
var mongoose = require('../../libs/mng');
Schema = mongoose.Schema;

 
// установка схемы
var schema = new Schema({
    povestka:{
	type: String,
    required:true
	},
	ktoprovodit:{
	type: String
	},
	fulldescr:{
	type:String
	},
	reshenie:{
	type:String
	},
	created:{
	type:Date,
	default:Date.now
	}
});
module.exports.model = mongoose.model('reshenia',schema); 

