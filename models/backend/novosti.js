var crypto = require('crypto');
var mongoose = require('../../libs/mng');
Schema = mongoose.Schema;

 
// установка схемы
var schema = new Schema({
    name:{
	type: String,
    required:true
	},
	full:{
	type:String
	},
	vazn:{
	type:String
	},
	created:{
	type:Date,
	default:Date.now
	}
});
module.exports.model = mongoose.model('novosti',schema); 

