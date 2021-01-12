//nav bar//
var navbar = document.createElement("");


//h1 tag//
var label = document.createElement("h1");
var labelItem = document.getElementsByName("h1");
document.body.append(label);

//h1 text//
var labelText = document.createTextNode("Anime Stuff");
label.appendChild(labelText);


//p tag//
var content = document.createElement("p");
var pageContent = document.getElementsByName("p");
document.body.append(content);

//p text//
var contentText = document.createTextNode("Going to go over some anime related topics with this website.");
content.appendChild(contentText);


//ol tag//
var container = document.createElement("ol");
var containerBox = document.getElementsByName("ol");
document.body.append(container);

//li tag//
var newL = document.createElement("li");
var newLi = document.getElementsByName("li");
document.body.append(newL);

//li text//
var newText = document.createTextNode("One Piece")
newL.appendChild(newText);

//li tag 2//
var newL2 = document.createElement("li");
var newLi2 = document.getElementsByName("li");
document.body.append(newL2);

//li text 2//
var newText2 = document.createTextNode("Boruto: Next Generation")
newL2.appendChild(newText2);

//li tag 3//
var newL3 = document.createElement("li");
var newLi3 = document.getElementsByName("li");
document.body.append(newL3);

//li text 3//
var newText3 = document.createTextNode("Sword Art Online")
newL3.appendChild(newText3);