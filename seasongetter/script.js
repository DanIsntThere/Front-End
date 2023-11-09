var name = prompt('Enter you name')
var month = prompt('Enter the current month').toLowerCase()

switch(month){
    case 'january':
    case 'febuary':
        alert(name +' it is winter')
        break;
    case 'march':
    case 'april':
    case 'may':
        alert(name + ' it is spring')
        break;
    case 'june':
    case 'july':
    case 'august':
        alert(name + ' it is summer')
        break;
    case 'september':
    case 'october':
    case 'november':
        alert(name + ' it is autumn')
        break;
    case 'december':
        alert(name + ' it is winter')
        break;
    default:
        alert(name + ' enter an actual season')
}
