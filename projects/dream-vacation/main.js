var gNow = getTime();
console.log( 'gNow', gNow.day );

window.onload = function() {

  drawComposition(gNow);}

function drawComposition(theTime) {

  console.log('drawComposition',theTime);

  var container;

  if ( theTime.hour > 7 && theTime.hour <= 9 ) {
    console.log('1')
    container = document.getElementById('container-1');}

  if ( theTime.hour > 9 && theTime.hour <= 11 ) {
    console.log('2')
    container = document.getElementById('container-2');}

  if ( theTime.hour > 11 && theTime.hour <= 13 ) {
    console.log('3')
    container = document.getElementById('container-3');}

  if ( theTime.hour > 13 && theTime.hour <= 15 ) {
    console.log('4')
    container = document.getElementById('container-4');}

  if ( theTime.hour > 15 && theTime.hour <= 17 ) {
    console.log('5')
    container = document.getElementById('container-5');}

  if ( theTime.hour > 17 && theTime.hour <= 19 ) {
    console.log('6')
    container = document.getElementById('container-6');}

  if ( theTime.hour > 19 && theTime.hour <= 21 ) {
    console.log('7')
    container = document.getElementById('container-7');}

  if ( theTime.hour > 21 && theTime.hour <= 23 ) {
    console.log('8')
    container = document.getElementById('container-8');}

  if ( theTime.hour > 00 && theTime.hour <= 1 ) {
    console.log('9')
    container = document.getElementById('container-9');}

  if ( theTime.hour > 1 && theTime.hour <= 3 ) {
    console.log('10')
    container = document.getElementById('container-10');}

  if ( theTime.hour > 3 && theTime.hour <= 5 ) {
    console.log('11')
    container = document.getElementById('container-11');}

  if ( theTime.hour > 5 && theTime.hour <= 7 ) {
    console.log('12')
    container = document.getElementById('container-12');}

  if ( container ) {
    container.style.display = "block";}

}

function getTime() {

  var now = new Date();

  now = {
    year : now.getYear(),
    month : now.getMonth(),
    date : now.getDate(),
    day : now.getDay(),
    hour : now.getHours(),
    minute : now.getMinutes(),
    second : now.getSeconds()
  }

  return now;

}
