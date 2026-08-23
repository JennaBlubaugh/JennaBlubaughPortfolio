
//What we are trying to achieve

//The images need to have a red box around them when hovered over
//When the image is clicked, it generates a larger version of the image
//below the gallery
//Then, when another image is clicked, it REPLACES the previous image
//Look at previous lab for that DOM code

//The larger images are generated through DOM


//I realized that I made the image that appears as a link, when in
//reality I needed to make just the thumbnail a link...
//I mean it works? So maybe don't touch it?
//Tested it without making it an <a href>, doesn't work




//does "please select an image" need DOM? Maybe I do somethhing similar but
//remove "prevent default"
//maybe I can make it in html, and remove it with dom
//NEVERMIND THESE FUNCTIONS GET RID OF IT BY THEMSELEVES
//TOOK A SECOND TO REGISTER
//"check for child nodes, delete them"





function replaceJeanImage(event){
    //Do I need to make one ID for every image?
    //I think so, but "imagechangingdiv" stays the same for each

    event.preventDefault();
//Prevents default action from occurring

var imageChangingDiv = document.getElementById("imageChange");

while (imageChangingDiv.hasChildNodes()){
    imageChangingDiv.removeChild(imageChangingDiv.lastChild);
    //This should remove the previous image when a new one is clicked
}
//Now we add the image to the div


var imageOneAnchor = document.createElement("a");
//I'm going to try what the previous lab showed, with href="#"
//maybe this is what keeps it on the page when clicked
imageOneAnchor.setAttribute("href", "#");




var imageOne = document.createElement("img");
imageOne.setAttribute("src", "img/Jeantaud_1898.jpg");
imageOne.setAttribute("alt", "image of 1898 Jeantaud electric vehicle which set the first land speed record.")

imageOne.setAttribute("height", "auto");
imageOne.setAttribute("width", "370px");
//fixing the size here may be a css thing

//gives the image all of its attributes

//Problem!! It needs to be clickable
//do I make it a href?? a link?

imageOneAnchor.appendChild(imageOne);
//attaching image back to link like <a href ~~~> image </a>


imageChangingDiv.appendChild(imageOneAnchor);
//should attach to div under the gallery in html

//THIS WORKS

}

function replacePaquesImage(event){
    event.preventDefault();

//gets rid of previous image
var imageChangingDiv = document.getElementById("imageChange");
while (imageChangingDiv.hasChildNodes()){
    imageChangingDiv.removeChild(imageChangingDiv.lastChild);

}



var imageOneAnchor = document.createElement("a");

imageOneAnchor.setAttribute("href", "#");



//Since the OG one uses this, but it is still local, I can
//still use the same code
var imageOne = document.createElement("img");
imageOne.setAttribute("src", "img/gardner-serpollet-oeuf-de-pacques_1902.jpg");
imageOne.setAttribute("alt", "Thumbnail image of 1902 Œuf de Pâques vehicle which set a new land speed record with a steam powered vehicle.")

imageOne.setAttribute("height", "auto");
imageOne.setAttribute("width", "370px");


imageOneAnchor.appendChild(imageOne);



imageChangingDiv.appendChild(imageOneAnchor);

}

function replaceFredImage(event){
    //Do I need to make one ID for every image?
    //I think so, but "imagechangingdiv" stays the same for each

    event.preventDefault();
//Prevents default action from occurring

var imageChangingDiv = document.getElementById("imageChange");

while (imageChangingDiv.hasChildNodes()){
    imageChangingDiv.removeChild(imageChangingDiv.lastChild);
    //This should remove the previous image when a new one is clicked
}



var imageOneAnchor = document.createElement("a");

imageOneAnchor.setAttribute("href", "#");




var imageOne = document.createElement("img");
imageOne.setAttribute("src", "img/fred-marriott-stanley-steamer-1906.jpg");
imageOne.setAttribute("alt", "Image of new land speed record set in 1906 by Fred Marriott.")

imageOne.setAttribute("height", "auto");
imageOne.setAttribute("width", "370px");


imageOneAnchor.appendChild(imageOne);
imageChangingDiv.appendChild(imageOneAnchor);


}

function replaceArrowImage(event){
    //Do I need to make one ID for every image?
    //I think so, but "imagechangingdiv" stays the same for each

    event.preventDefault();
//Prevents default action from occurring

var imageChangingDiv = document.getElementById("imageChange");

while (imageChangingDiv.hasChildNodes()){
    imageChangingDiv.removeChild(imageChangingDiv.lastChild);
    //This should remove the previous image when a new one is clicked
}



var imageOneAnchor = document.createElement("a");

imageOneAnchor.setAttribute("href", "#");




var imageOne = document.createElement("img");
imageOne.setAttribute("src", "img/Golden_Arrow_1929.jpg");
imageOne.setAttribute("alt", "Image of the car 'Golden Arrow' which exceeded the previous land speed record")

imageOne.setAttribute("height", "auto");
imageOne.setAttribute("width", "370px");


imageOneAnchor.appendChild(imageOne);
imageChangingDiv.appendChild(imageOneAnchor);


}

//The previous assignment asked if we can compress this, the process is the same
//except for the image and the alt text, then also calling the functions
//in "insideBrowser"...  If I made them variables, they would be local, so I couldn't compress
//them into one function I don't believe.
//at least I don't think *I* can

function replaceBlueImage(event){
    //Do I need to make one ID for every image?
    //I think so, but "imagechangingdiv" stays the same for each

    event.preventDefault();
//Prevents default action from occurring

var imageChangingDiv = document.getElementById("imageChange");

while (imageChangingDiv.hasChildNodes()){
    imageChangingDiv.removeChild(imageChangingDiv.lastChild);
    //This should remove the previous image when a new one is clicked
}



var imageOneAnchor = document.createElement("a");

imageOneAnchor.setAttribute("href", "#");




var imageOne = document.createElement("img");
imageOne.setAttribute("src", "img/Blue-Bird-CN7_1964.jpg");
imageOne.setAttribute("alt", "Image of the car 'Blue bird' and set the record for the flying mile.")

imageOne.setAttribute("height", "auto");
imageOne.setAttribute("width", "370px");


imageOneAnchor.appendChild(imageOne);
imageChangingDiv.appendChild(imageOneAnchor);


}

function replaceThrustImage(event){
    //Do I need to make one ID for every image?
    //I think so, but "imagechangingdiv" stays the same for each

    event.preventDefault();
//Prevents default action from occurring

var imageChangingDiv = document.getElementById("imageChange");

while (imageChangingDiv.hasChildNodes()){
    imageChangingDiv.removeChild(imageChangingDiv.lastChild);
    //This should remove the previous image when a new one is clicked
}



var imageOneAnchor = document.createElement("a");

imageOneAnchor.setAttribute("href", "#");




var imageOne = document.createElement("img");
imageOne.setAttribute("src", "img/Thrust-SSC-2_1997.jpg");
imageOne.setAttribute("alt", "Image of Andy Green next to Thrust SSC which was the only vehicle to break the sound barrier and achieved 763 mph.");

imageOne.setAttribute("height", "auto");
imageOne.setAttribute("width", "370px");


imageOneAnchor.appendChild(imageOne);
imageChangingDiv.appendChild(imageOneAnchor);


}



function insideBrowser(){

    var jeanClickListener = document.getElementById("jean");
    jeanClickListener.addEventListener("click", replaceJeanImage, false);
    //waits for click, this is the first image to test
    //IT WORKS!! The mouse doesn't open but! That's a problem for
    //another day

    var paquesClickListener = document.getElementById("paques");
    paquesClickListener.addEventListener("click", replacePaquesImage, false);

    var fredClickListener = document.getElementById("fred");
    fredClickListener.addEventListener("click", replaceFredImage, false);

    var arrowClickListener = document.getElementById("arrow");
    arrowClickListener.addEventListener("click", replaceArrowImage, false);

    var blueClickListener = document.getElementById("blue");
    blueClickListener.addEventListener("click", replaceBlueImage, false);

    var thrustClickListener = document.getElementById("thrust");
    thrustClickListener.addEventListener("click", replaceThrustImage, false);
}

window.addEventListener("load", insideBrowser, false);