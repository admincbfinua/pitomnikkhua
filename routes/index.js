var express = require('express');
var router = express.Router();
var Face = require('../models/backend/face').model;
/* GET home page. */
router.get('/', function(req, res, next) {
	Face.find({},function(err,rows){
			if(err) return next(err);
			 res.render('./frontend/index', { title: 'Дачный массив Харьков Питомник', description :'Питомник - это дачный массив под Харьковом. Расположение, схемы проезда, уставные документы товарищества, графики продачи воды, купить участок дом дачу', keywords:'дача, харьков, недалеко от Харькова, питомник, купить дачу Харьков, купить участок Харьков',foto:rows});
		})
 
});
router.get('/ustav', require('./frontend/ustav').get);
router.get('/otchetsobrania', require('./frontend/otchetsobrania').get);
router.get('/shablonidokumentov', require('./frontend/shablonidokumentov').get);
router.get('/electroenergia', require('./frontend/electroenergia').get);
router.get('/water', require('./frontend/water').get);
router.get('/novosti', require('./frontend/novosti').get);
router.get('/dachi', require('./frontend/dachi').get);
router.get('/login', require('./frontend/login').get);
router.post('/login', require('./frontend/login').post);
router.post('/logout', require('./frontend/logout').post);
router.get('/prodamdachu', require('./frontend/prodamdachu').get);
router.get('/prodamdachu/add', require('./frontend/prodamdachu').get);
router.post('/prodamdachu/add', require('./frontend/addpostprodamdachu').post);
router.get('/prodamdachu/edit/:id', require('./frontend/editgetprodamdachu').get);
router.post('/prodamdachu/edit/:id', require('./frontend/postaftereditgetprodamdachu').post);
router.get('/prodamdachu/delete/:id', require('./frontend/delprodamdachu').get);
//admin panel

//auth page
router.get('/backend/login', require('./backend/login').get);
router.post('/backend/login', require('./backend/login').post);
router.post('/backend/logout', require('./backend/logout').post);

//main page
router.get('/backend/index', require('./backend/index').get);

//reshinie sobranij
router.get('/backend/shablondocs', require('./backend/shablondocs').get);
router.get('/backend/shablondocs/add', require('./backend/addshablondocs').get);
router.post('/backend/shablondocs/add', require('./backend/addpostshablondocs').post);
router.get('/backend/shablondocs/delete/:id', require('./backend/delshablondocs').get);
router.get('/backend/shablondocs/edit/:id', require('./backend/editshablondocs').get);
router.post('/backend/shablondocs/edit/:id', require('./backend/saveeditshablondocs').post);

//dolznostnie faces tovarishestv
router.get('/backend/face', require('./backend/face').get);
router.get('/backend/face/add', require('./backend/addgetface').get);
router.post('/backend/face/add', require('./backend/addface').post);
router.get('/backend/face/delete/:id', require('./backend/deleteface').get);

//site news
router.get('/backend/news', require('./backend/news').get);
router.get('/backend/news/add', require('./backend/addgetnews').get);
router.post('/backend/news/add', require('./backend/addnews').post);
router.get('/backend/news/edit/:id', require('./backend/editnews').get);
router.post('/backend/news/edit/:id', require('./backend/saveeditnews').post);
router.get('/backend/news/delete/:id', require('./backend/delnews').get);
//end admin panel

module.exports = router;
