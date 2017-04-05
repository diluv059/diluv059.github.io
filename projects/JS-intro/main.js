var springbreak = 'paint';

console.log (6*11);
console.log (33+33);
console.log (5*10+11);
console.log (60*10+6);
console.log (60+6);
console.log (20*3+6);

var groupone = [
'Carol',
'Nafisa',
'Kyle'
];

var grouptwo = [
'Vitoria',
'Elizabeth',
'Jissaura'
];

var groupthree = [
'Ana Sofia',
'Moon',
'Gaurika'
];

var allstudentshere = false

var studentsmissing = true

var allgroups= [groupone, grouptwo, groupthree]

for (var index1 = 0; index1 < allgroups.length; index1++ ) {
  console.log(' This group is number ' + (index1 +1 ));
  console.log (' The sudents in this group are:');

for (var index2 = 0; index2 < allgroups[index1].length;index2++){
  console.log( allgroups[index1][index2] );
  }
}
