
$(".pokemon").click(function () {
    var canvas = document.getElementById('colors_sketch');
    var context = canvas.getContext('2d');
    context.clearRect(0,0,500,500);
    $("#colors_sketch").css("background" , "url(assets/images/pokemon.jpg)");
});
$(".pikachu").click(function () {
    var canvas = document.getElementById('colors_sketch');
    var context = canvas.getContext('2d');
    context.clearRect(0,0,500,500);
    $("#colors_sketch").css("background" , "url(assets/images/pikachu.jpg)");

});
$(".kitty").click(function () {
    var canvas = document.getElementById('colors_sketch');
    var context = canvas.getContext('2d');
    context.clearRect(0,0,500,500);
    $("#colors_sketch").css("background" , "url(assets/images/kitty.JPG)");

});
$(".fish").click(function () {
    var canvas = document.getElementById('colors_sketch');
    var context = canvas.getContext('2d');
    context.clearRect(0,0,500,500);
    $("#colors_sketch").css("background" , "url(assets/images/fish.JPG) center");
});
$(".corgi").click(function () {
    var canvas = document.getElementById('colors_sketch');
    var context = canvas.getContext('2d');
    context.clearRect(0,0,500,500);
    $("#colors_sketch").css("background" , "url(assets/images/corgi.JPG)");
});
$(".rabbit").click(function () {
    var canvas = document.getElementById('colors_sketch');
    var context = canvas.getContext('2d');
    context.clearRect(0,canvas.width,canvas.height);
    $("#colors_sketch").css("background" , "url(assets/images/rabbit.JPG)");
    context.clearRect(0,0,500,500);
    $('#colors_sketch').sketch();

});
$(".fb-share-button").click(function () {


});
$(".saver").click(function () {
    var png = ReImg.fromCanvas(document.getElementById('colors_sketch')).downloadPng();
    var result_picture = ReImg.fromCanvas(document.getElementById('colors_sketch')).toImg().src;
    $(".modal-content").html();
    $(".modal-content").html('<img src ="" id="result">');
    $("#result").attr("src",result_picture);
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
});
