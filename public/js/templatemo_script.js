var top_menu_height = 0;
jQuery(function($) {
		$(window).load( function() {
			$('.external-link').unbind('click');	
		});
		
        $(document).ready( function() {

            // load google map
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC7St3KC1w5cI6uizaikif1vjNRR7lVrA4&callback=initialize';
        document.body.appendChild(script);

        top_menu_height = $('.templatemo-top-menu').height();
        // scroll spy to auto active the nav item
        $('body').scrollspy({ target: '#templatemo-nav-bar', offset: top_menu_height + 10 });
		$('.external-link').unbind('click');

        // scroll to top
        $('#btn-back-to-top').click(function(e){
            e.preventDefault();
            scrollTo('#templatemo-top');
        });

        // scroll to specific id when click on menu
        $('.templatemo-top-menu .navbar-nav a').click(function(e){
            e.preventDefault(); 
            var linkId = $(this).attr('href');
            scrollTo(linkId);
            if($('.navbar-toggle').is(":visible") == true){
                $('.navbar-collapse').collapse('toggle');
            }
            $(this).blur();
            return false;
        });
		
        // to stick navbar on top
        $('.templatemo-top-menu ').stickUp();

        // gallery category
        $('.templatemo-gallery-category a').click(function(e){
            e.preventDefault(); 
            $(this).parent().children('a').removeClass('active');
            $(this).addClass('active');
            var linkClass = $(this).attr('href');
            $('.gallery').each(function(){
                if($(this).is(":visible") == true){
                   $(this).hide();
                };
            });
            $(linkClass).fadeIn();  
        });

        //gallery light box setup
        $('a.colorbox').colorbox({
                                    rel: function(){
                                        return $(this).data('group');

                                    }
        });
		
    });
});
$(document).ready( function() {
	$(document.forms['loginform-site']).on('submit',function(){
				
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
					alert("Вход для дроидов закрыт");
					return false;
				}
			});
			
	$(document.forms['dachiupload']).on('submit',function(){
				
				var num_uc = $('input[name="num_uc"]').val();
				//var photo = $('input[name="photo"]').val();
				//alert(photo.split('.').pop());
				
				
				var opis_uc = $('input[name="opis_uc"]').val();
				var plosh_uc = $('input[name="plosh_uc"]').val();
				var price = $('input[name="price"]').val();
				var contact_fio = $('input[name="contact_fio"]').val();
				var contact_phone = $('input[name="contact_phone"]').val();
				
				if(typeof num_uc=="underfined" || num_uc=="")
				{
					alert('Номер участка не может быть пустым')
					return false;
				}
				else if(checkSpec(num_uc))
				{
					alert('Символы [ & < >  в номере участка не допустимы');
					return false;
				}
				
				
				if(typeof price=="underfined" || price=="")
				{
					alert('Введите стоимость участка')
					return false;
				}
				else if(checkSpec(price))
				{
					alert('Символы [ & < >  в стоимости участка не допустимы');
					return false;
				}
				
				if(typeof contact_fio=="underfined" || contact_fio=="")
				{
					alert('Введите имя контактного лица, не может быть пустым')
					return false;
				}
				else if(checkSpec(contact_fio))
				{
					alert('Символы [ & < >  в имени контактного лица не допустимы');
					return false;
				}
				
				if(typeof contact_phone=="underfined" || contact_phone=="")
				{
					alert('Введите номер телефона контактного лица, не может быть пустым')
					return false;
				}
				else if(checkSpec(contact_phone))
				{
					alert('Символы [ & < >  в номер телефона не допустимы');
					return false;
				}
				
				
				
			});
			/* click on small foto to change on big image */
			$('.panel-body').on('click','.smallfoto',function(){
				var srcimage = $(this).children().attr('src');
				$(this).parents().prev().children().attr('src',srcimage);
				
				
			})
})
function initialize() {
    
	
	 var uluru = {lat: 50.175357, lng: 36.23009};
        var map = new google.maps.Map(document.getElementById('map-canvas'), {
          zoom: 11,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });

	
	}

/*
String.prototype.matchHTML = function() {
     return String(this).match(/[&<>"'\/]/g);
}
*/	
function checkSpec(txt){
	return txt.match(/[&<>"'\/]/g);
	
}

function CheckExt(val)
{
	var v = val.value;
	var v = v.search(/^.*\.(?:jpg|jpeg|gif|png)\s*$/ig);
	  if(v!=0){
	     alert("Неправильный формат файла, попробуйте загрузить картинку");
	    return false;
	  }
	
}
// scroll animation 
function scrollTo(selectors)
{

    if(!$(selectors).size()) return;
    var selector_top = $(selectors).offset().top - top_menu_height;
    $('html,body').animate({ scrollTop: selector_top }, 'slow');

}
function adddacha(){

    window.location.href = '../prodamdachu/add';
}
function canceldachiadd(){

    window.location.href = '/prodamdachu';
}