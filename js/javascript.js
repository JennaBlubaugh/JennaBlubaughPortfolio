
//Dom for the 'menu' items

function goblinGizmosDom(event){

event.preventDefault();


var infoLoadMenu = document.getElementById("ggInfo");
while (infoLoadMenu.hasChildNodes()){
infoLoadMenu.removeChild(infoLoadMenu.lastChild);
}



const infoBox = document.createElement("p");
const textNode = document.createTextNode("test test");
infoBox.appendChild(textNode);

infoLoadMenu.appendChild(infoBox);

}





function runMenuItems(){

 var goblinClickListener = document.getElementById("goblin");
    goblinClickListener.addEventListener("click", goblinGizmosDom, false);


}



window.addEventListener("load", runMenuItems, false);