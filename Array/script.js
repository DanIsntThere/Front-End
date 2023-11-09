var language = ["Python", "C#", "JavaScript"];
document.getElementById("array").innerHTML = language;
alert(language.toString());
ans = prompt('Enter another programming language');
/**document.getElementById("array").innerHTML = language.push(ans);**/
replace = prompt('Enter which language you want to replace\n(1) (2) (3)');
document.getElementById("array").innerHTML = language;
num = 0
switch(replace){
    case 1:
        num = 0
        break;
    case 2:
        num= 1
        break;
    case 3:
        num =2
        break;
}
language[num]=ans
document.getElementById("array").innerHTML = language;
alert(language.toString());