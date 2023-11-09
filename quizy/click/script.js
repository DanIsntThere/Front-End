click=0
function countclicks(){
click = click + 1;
console.log(click);
var num = document.getElementById("counter-");
num.innerHTML = click;
console.log(click)
}