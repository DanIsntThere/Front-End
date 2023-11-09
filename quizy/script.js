// the element with the id "heading" is saved in the variable oldHeading 

var oldHeading = document.getElementById("greeting"); 

 

// print out the old heading which is stored in oldHeading 

console.log(oldHeading.innerHTML); 

 

//a prompt dialogue box will appear for the user to enter a new heading. 

var newHeading = prompt("Enter your name"); 

 

//Set the innerHTML property of oldHeading to the contents of the variable newHeading. 

oldHeading.innerHTML = 'Welcome '+ newHeading; 

  