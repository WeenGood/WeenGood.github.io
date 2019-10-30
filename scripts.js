$(".title1:first").html(document.title);
[].forEach.call($(".butClass"),function(el){
	el.addEventListener('mouseenter', nextSlide);
});

function linkClick(event){
	id = event.currentTarget.id;
	link = "./"+id+".html";
	return location.href = link;
}
[].forEach.call($(".cell"),function(el){
	el.addEventListener('click', linkClick);
});

function nextSlide(event)
{
	$(".imgActive").removeClass("imgActive");
	$(".butActive").removeClass("butActive");
	i = event.currentTarget.name-1;
	$(".imgClass:eq("+i+")").addClass("imgActive");
	$(".butClass:eq("+i+")").addClass("butActive");
}
function back(){
	return location.href = "./index.html";
}
