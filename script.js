/****************************************
CLOSE BUTTON
****************************************/

// return specified element's child elements as an object
let listObject = document.getElementsByTagName("LI");
// counter variable
var i;
// start at 0; if i < total elements in the NodeList; count ++;
for (i = 0; i < listObject.length; i++) {
    // create a <span> element
    var span = document.createElement("SPAN");
    // must also create a text node
    var txt = document.createTextNode("\u00D7");
    // gets and set the value of the class attribute
    span.className = "close";
    span.appendChild(txt);
    listObject[i].appendChild(span);
}


/****************************************
"CHECKED" SYMBOL FOR LIST ITEMS
****************************************/

// var list = document.querySelector('ul');
// list.addEventListener('click', function(param) {
//     if (param.target.tageName === 'LI') {
//         param.target.classList.toggle('checked');
//     }
// }, false);



/******************************
ADD LIST ITEMS
******************************/
