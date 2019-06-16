document.getElementById("blueBox").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "blue";

});

document.getElementById("growBox").addEventListener("click", function(){

    document.getElementById("box").style.height = "250px";

});

document.getElementById("fadeBox").addEventListener("click", function(){

    document.getElementById("box").style.opacity = ".1";

});
document.getElementById("rightBox").addEventListener("click", function(){

    document.getElementById("box").style.cssFloat = "right";

});
document.getElementById("resetBox").addEventListener("click", function(){

    document.getElementById("box").style.height = "150px"
    document.getElementById("box").style.opacity = "1"
    document.getElementById("box").style.backgroundColor = "orange"
    document.getElementById("box").style.cssFloat = "none";

});