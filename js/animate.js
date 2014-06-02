function animation(){
	cloud1();
	cloud3();
	penguin();
}
function cloud1(){
	$(".cloud1").animate({left:"+=850px"},10000).animate({left:"-150px"},0)
	setTimeout("cloud1()",10000);
}
function penguin(){
	$(".penguin").animate({left:"+=230px"},10000).animate({left:"-=230px"},10000)
	setTimeout("penguin()",6000);
}
function cloud3(){
	$(".cloud3").animate({left:"+=800px"},9000).animate({left:"-100px"},0)
	setTimeout("cloud3()",6000);
}

$(document).ready(function(){
	setTimeout("animation()",300);
	$(".alert").animate({opacity:2},3000).fadeOut(500);


})