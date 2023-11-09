var num = Math.floor(Math.random() * 11);
var name = prompt('Enter your name')
alert('Welcome '+name)
var lop = 0
var arr = [1,2,3,4,5,6,7,8,9,10]
while (lop < 1){
    ans = prompt('Guess the number between 1 and 10')
    if (ans == num){
        alert('You guessed correctly')
        lop = 2
    }
    else{
        alert('Wrong')
        if (ans > num){
            alert('Too high, try guessing a little lower next time bud')
            
        }else{
            alert(name+' you guessed a little low, try entering a higher number next time buckeroo')
        }
            arr.splice(ans+1, 1);
            alert(arr.toString())
    }
}