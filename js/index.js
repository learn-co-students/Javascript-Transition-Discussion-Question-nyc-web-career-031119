// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }
function fadeOutEffect(time) {
   var fadeTarget = document.getElementById("foreground");
   var fadeEffect = setInterval(function () {
       if (!fadeTarget.style.opacity) {
           fadeTarget.style.opacity = 1;
       }
       if (fadeTarget.style.opacity > 0) {
           fadeTarget.style.opacity -= 0.1;
       } else {
           clearInterval(fadeEffect);
       }
   }, time);
}

document.getElementById("save_lincoln").addEventListener('click', function(e){
  const time = document.getElementById("interval")
  fadeOutEffect(time.value);
})
