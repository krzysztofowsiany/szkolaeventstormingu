
function startTimer(time) {
    
    

var countDownDate = new Date(time).getTime();
// Update the count down every 1 second
    var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =   
  days + "d " + hours + "h "
  + minutes + "m " + seconds + "s do " + time;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = ""+time;
  }
}, 1000);
}