$(document).ready( function() {
		//auth
		$(document.forms['login-form']).on('submit',function(){
				var pass = $('input[name="password"]').val();
				var name = $('input[name="name"]').val();
				if(typeof name=="underfined" || name=="")
				{
					alert('Имя не может быть пустым')
					return false;
				}
				if(pass.length < 5 || typeof pass=="underfined" || pass=="")
				{
					alert('Пароль короткий или не введен')
					return false;
				}
				
				if(!($('#RobotCheck').prop("checked")))
				{
					alert("Роботам вход закрыт");
					return false;
				}
			});
			//admin face
			$(document.forms['upload']).on('submit',function(){
				var fio = $('input[name="fio"]').val();
				var dolz = $('input[name="dolz"]').val();
				var tel = $('input[name="phone"]').val();
				//var ph = '/^\d[\d\(\)\ -]{4,14}\d$/';
				if(typeof fio=="underfined" || fio=="")
				{
					alert('ФИО  не может быть пустым')
					return false;
				}
				if(typeof dolz=="underfined" || dolz=="")
				{
					alert('Введите должность')
					return false;
				}
				if(typeof tel=="underfined" || tel=="")
				{
					alert('Какие-то негаразды с номером телефона, проверьте правильность');
					return false;
				}	
				
			});
			
			/*$(".upload").validate({

                rules:{
                    "fio":{
                        minlength:5
                    },
                    "dolz":{
                        required:true
                    },
                    "phone":{
                        number:true
                    }
                },
                messages: {
                    fio:{
                        minlength: "ФИО должно быть больше 5 символов",
                        characterOnly:"Только буквы"
                    },
                    dolz:{
                        required:"Введите должность"
                    },
                    phone:{
                        number:"Толко цифры"
                    }
                }

            });
			*/
});
function addShablondocs(){

    window.location.href = '../backend/shablondocs/add';
}
function cancelAdd(){
    
    window.location.href = '/backend/shablondocs';
}
function addface(){

    window.location.href = '../backend/face/add';
}
function cancelFace(){
    
    window.location.href = '/backend/face';
}
function addnews(){

    window.location.href = '../backend/news/add';
}
function cancelNews(){
    
    window.location.href = '/backend/news';
}