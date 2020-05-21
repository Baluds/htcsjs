document.addEventListener("DOMContentLoaded",function (event){   //this thing loads first before css and other stuff

//the normal html onclick wont work if the above line is placed so to use tat method u can remove above line

function clicked (event) {
console.log(this);
console.log(event);
this.textContent = "you pressed it";  //varies up on from wher u call function
var name = document.getElementById("txt").value;
var msg = "Helloo " + name + ", How you doing??";

var msg1 = "<h1>sup " + name + ", hows quarantine going?</h1>";

document.getElementById("content").textContent = msg;

document.getElementById("content1").innerHTML = msg1;

if (name === 'student'){

	var titl = document.querySelector('#title').textContent;

	titl += " how are you"

	document
	.querySelector('#title') // or h1
	.textContent = titl;


}

};     // if i use onclick in html then this operator will point to window not button

document.querySelector('#bttn1').addEventListener("click",clicked);    //if i use this method then the this operator will be pointing to button not window
     //or
document.querySelector('#bttn')
.onclick = clicked;                                 //this will be pointing to button not windows


document.querySelector("body").addEventListener("mousemove",function(event){
	if(event.shiftKey === true){

console.log(event.clientX);
	console.log(event.clientY);
		
	}
	
}
); 

}
);

