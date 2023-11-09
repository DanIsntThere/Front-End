var ans = prompt('Enter a number');
timestable = parseInt(ans);

var timetableresults='';
for (var x = 0; x < 12; x++) {
  num = ans*x
  timetableresults = timetableresults + "\n" +(timestable + 'x' + x + ' = '+ (parseInt(timestable *x)).toString());

  };

alert(timetableresults)