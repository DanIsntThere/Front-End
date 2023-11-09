var name = prompt("Enter your name"); 
var result = prompt("Enter your exam result");
var result = parseInt(result);
if (result >= 90){
    alert(name +', you got an A')
    console.log('Grade A')
}else if (result >80){
    alert(name +', you got an B')
    console.log('Grade B')
}else if (result >70){
    alert(name +', you got a C')
    console.log('Grade C')
}else if (result < 70){
    alert(name +', you got a D')
    console.log('Grade D')
}else{
    alert(name+' you better refresh the page and type a number in')
    console.log('Loser alert')
}