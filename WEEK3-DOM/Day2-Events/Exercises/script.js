// Exercise 1 //
// In a JS file, write a JavaScript function to add rows to a table. Use the code html as a base

function insertRow()
{
var x=document.getElementById('sampleTable').insertRow(0);
var y = x.insertCell(0);
var z = x.insertCell(1);
y.innerHTML="New Cell1";
z.innerHTML="New Cell2";
}


// Exercise 2 //
// Add a few event listener to the button. The event listeners should change the style of the button

function clickIn(btnStyle) { 
	btnStyle.style.backgroundColor = "blue";
}
function clickOut(btnStyle){
	btnStyle.style.backgroundColor = "violet";
}

let btnStyle = document.querySelector("#jsstyle");

btnStyle.addEventListener("clickIn", function(){
	clickIn(btnStyle);
});
btnStyle.addEventListener("clickOut", function(){
	clickOut(btnStyle);
}); 