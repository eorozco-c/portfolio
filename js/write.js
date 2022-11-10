

function typeWriter(text, elemId) {
    var i = 0;
    var speed = 50;
    var elem = document.getElementById(elemId);
    
    function type() {
        if (i < text.length) {
            elem.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

var text1 = "Hola, mi nombre es Ernesto Orozco";
var text2 = "Soy Full Stack developer";

typeWriter(text1, "writing-1");

setTimeout(function () {
    typeWriter(text2, "writing-2");
}, 2000);

