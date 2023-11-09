const d = new Date();
let date = d.getDay();
/**alert(date)**/
day=""
switch(date){
    case 1:
        day = 'Monday'
        break;
    case 2:
        day = 'Tuesday'
        break;
    case 3:
        day = 'Wednesday'
        break;
    case 4:
        day = 'Thursday'
        break;
    case 5:
        day = 'Friday'
        break;
    case 6:
        day = 'Saturday'
        break;
    case 0:
        day = 'Sunday'
        break;
}
alert('Today it is '+day)