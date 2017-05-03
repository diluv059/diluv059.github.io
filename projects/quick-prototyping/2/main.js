var date = new Date();

function updateTime() {
  date = new Date();
  $('#time-gmt').html( date.toGMTString() );
  $('#time-seconds').html( date.getTime() );

}

$(function() {
  updateTime();
  setInterval(updateTime, 50);

  $('#Day').html( date.getDate() );
  $('#Month').html( date.getMonth()+ 1 );
  $('#Year').html( date.getUTCFullYear() );

});
