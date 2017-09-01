var AdmUser = require('./models/backend/admuser');
var mongoose = require('./libs/mng');
/*var admuser = new AdmUser.model({
    username: 'Radmin',
   	password: 'gfhjkmyfd[jl',
	acsessLevel:10 //high level
});
*/
var admuser = new AdmUser.model({
    username: 'moderator',
   	password: 'd[jlvjlthfnjhf',
	acsessLevel:20 
});

admuser.save(function(err,admuser,affected){
    mongoose.disconnect();  // отключение от базы данных
     
    if(err) return console.log(err);
    console.log("Сохранен объект", admuser);
});