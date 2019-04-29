// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

background =  document.querySelector('#background')
foreground = document.querySelector('#foreground')
button = document.querySelector('#save_lincoln')


  function fadeOutEffect() {
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
    }, 200);
}

button.addEventListener('click', function(){
  fadeOutEffect()
});
