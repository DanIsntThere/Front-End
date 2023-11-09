var usr = 'usr'
var pass = 'pass'
var guess = 0

do{ ans1 = prompt('Enter your username')
    ans = prompt('Enter your password')
if (pass === ans){
    if (usr == ans1){
    alert('You have successfully logged in')
    exit()
    }else{
        alert('Incorrect username')
    }

}else{
    alert('Incorrect password')
    guess=guess+1
}}
while(guess <3)