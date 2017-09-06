var mongoose = require('mongoose');
mongoose.connect('mongodb://pitomnikadmin:test;test@localhost:27017/pitomnikdb');
module.exports = mongoose;


