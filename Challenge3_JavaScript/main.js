/******************************************
*** Zaio JavaScript Challenge: JS file
*** Dikabelo Ramashala
*** 2nd July 2019
*******************************************/


function calculateASCII(color) {
    var asnum = 0;
    for (var i = 0; i < color.length; i++) {
        asnum += color.charCodeAt(i);
    }
    document.getElementById("color-box").style.backgroundColor = color.toLowerCase();
    document.getElementsByTagName("strong")[0].textContent = color;
    document.getElementsByTagName("strong")[1].textContent = asnum;
    var x = document.getElementsByClassName("color-box-string");
    for(var i = 0; i < x.length; i++){
        x[i].style.display = "inherit";
    }
}


var colorbuttons = document.getElementsByClassName("buttons");


colorbuttons[0].getElementsByTagName("h3")[0].onclick = function(){
    calculateASCII(colorbuttons[0].getElementsByTagName("h3")[0].innerHTML);
    
};

colorbuttons[1].getElementsByTagName("h3")[0].onclick = function(){
    calculateASCII(colorbuttons[1].getElementsByTagName("h3")[0].innerHTML);
    
};

colorbuttons[2].getElementsByTagName("h3")[0].onclick = function(){
    calculateASCII(colorbuttons[2].getElementsByTagName("h3")[0].innerHTML);
    
};