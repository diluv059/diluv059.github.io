var MyName = 'Vitoria';
console.log(myName);

var FavNumberInteger = 8888;
console.log(FavNumberInteger);

var FavNumberString = '8888';
console.log(FavNumberString);

var x = [true];
console.log(x);

var MyNameLetters = [
'V',
'I',
'T',
'O',
'R',
'I',
'A'
];
console.log(MyNameLetters);

var DataTypes = [
18,
true,
'raspberries'
];

console.log(DataTypes);

var firstName = "Vitoria";
var lastName  = "DiIulio";

var fullName  = firstName + lastName;

console.log (40+60)

var firstItem = MyNameLetters[0];
var lastItem = MyNameLetters[MyNameLetters.length - 1];

var MarryPopins = 'supercalifragilisticexpialidocious';

var y = MarryPopins.length;

var allStudentsHere = true;

if ( allStudentsHere== true ) {
  console.log("all students are present");
} else {
  console.log("some students are absent");
}

for ( var i = 0; i < firstName.length; i++ ) {console.log( firstName[i]);}

var favouriteFoods = ['raspberries', 'salmontartar', 'nuggets'];
var favouriteAnimals = ['Duck', 'Sloth', 'Bunny'];
var favouritePlaces = ['NewYork', 'London', 'Moscow'];
var favouritePokemon = ['Skitty', 'Clefairy', 'Togepi'];

var ArrayOfArrays =[
['raspberries', 'salmontartar', 'nuggets'],
['Duck', 'Sloth', 'Bunny'],
['NewYork', 'London', 'Moscow'],
['Skitty', 'Clefairy', 'Togepi']];

console.log ('My favourite foods are');
for ( var a = 0; a < favouriteFoods.length; a++ ) {
console.log(favouriteFoods[a]);
};

console.log ('My favourite animals are');
for ( var b = 0; b < favouriteanimals.length; b++ ) {
console.log(favouriteanimals[b]);
};

console.log ('My favourite places are');
for ( var c = 0; c < favouritePlaces.length; c++ ) {
console.log(favouritePlaces[c]);
};

console.log ('My favourite pokemons are');
for ( var d = 0; d < favouritePokemon.length; d++ ) {
console.log(favouritePokemon[d]);
};

for (var index1 = 0; index1 < ArrayOfArrays.length; index1++ ) {
console.log('Group' + (index1 + 1));

for (var index2 = 0; index2 < arrayOfArrays[index1].length; index2++){
console.log (ArrayOfArrays[index1][index2]);
};
