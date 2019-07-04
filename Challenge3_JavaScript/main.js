/******************************************
*** Zaio JavaScript Challenge: JS file
*** Dikabelo Ramashala
*** 2nd July 2019
*******************************************/

/** Calculates ASCII color*/
function calculateASCII(color) {
    var asnum = 0;
    for (var i = 0; i < color.length; i++) {
        asnum += color.charCodeAt(i);
    }
    document.getElementById("color-box").style.backgroundColor = color.toLowerCase();
    document.getElementsByTagName("strong")[0].textContent = color;
    document.getElementsByTagName("strong")[1].textContent = asnum;
    let x = document.getElementsByClassName("color-box-string");
    for(var i = 0; i < x.length; i++){
        x[i].style.display = "inherit";
    }
}

/** Binds all events to relative h3 boxes*/

var arr = document.getElementsByTagName("h3");

for(let x = 0; x < arr.length; x++){
    arr[x].onclick = function(){
        calculateASCII(arr[x].innerHTML);
    }
}
