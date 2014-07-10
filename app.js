var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

var play = ['skiing', 'diving'];
var home = ['vacuum', 'clean'];
var school = ['hw', 'node', 'git'];

var inCode = prompt('play/home/school/quit ');

while(inCode!='q')
{
  var task = prompt('add task: ');

  if(inCode==='p')
  {
    play.push(task);
  }
  else if(inCode==='h')
  {
    home.push(task);
  }
  else
  {
    school.push(task);
  }

  inCode = prompt('play/home/school/quit ');
}
/*
console.log('on the menu for today:');
process.stdout.write('for fun: ');
    for(var i=0; i<play.length; i++)
    {
      process.stdout.write(play[i] + ', ');
      //console.log(' ');
    }
console.log(' ');
process.stdout.write('for hometime: '); 
    for(var j=0; j<home.length; j++)
    {
      process.stdout.write(home[j] + ', ');
      //console.log(' ');
    }
console.log(' ');
process.stdout.write('for your studies: ');
    for(var k=0; k<school.length; k++)
    {
      process.stdout.write(school[k] + ', ');
      //console.log(' ');
    }
console.log(' ');
*/
console.log('play: ' + play.join(', '));
