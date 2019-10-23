/* 

By Ne0Lux-C1Ph3r 
https://ne0lux-c1ph3r.github.io

*/

/* Function open 2 links */

function openWindow(link1, link2) {
    window.open(link1);
    window.open(link2);
};

/* Functions Viewer in stripViewer */

$(document).ready(function(){
	
	$(".home, .portfolio, .news, .write-up, .about").hide();

	$("#home").click(function(){
		$(".portfolio, .news, .write-up, .about").hide();
		$(".home").slideDown();
	});

	$("#news").click(function(){
		$(".home, .portfolio, .write-up, .about").hide();
		$(".news").slideDown();
	});

	$("#write-up").click(function(){
		$(".home, .portfolio, .news, .about").hide();
		$(".write-up").slideDown();
	});

	$("#about").click(function(){
		$(".home, .portfolio, .news, .write-up").hide();
		$(".about").slideDown();
	});

/* Function color change links */

	$("#link, #link1, #link2, #link3, #link4, #link5").hover(function(){
		$(this).css("color", "green");
	});
	
	$("#link, #link1, #link2, #link3, #link4, #link5").visited(function(){
		$(this).stop().css("color", "white");
	});
	
});

