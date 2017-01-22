$(document).ready(function(){
   $('.curtains').curtain();
   
	var scrollorama = $.scrollorama({
		blocks:'.curtains'
	});
    
    scrollorama.animate('#intro h2',{
    	duration:200, property:'left', end:-860
    });

    scrollorama.animate('#intro h1',{
	delay:500, duration:933, property:'top', start:45, end:-1800
    });
    
});
