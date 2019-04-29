// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

const background = document.getElementById('background');
const foreground = document.getElementById('foreground');
const hiddenMessage = document.getElementById('hidden-message');
const saveButton = document.getElementById('save_lincoln');
const input = document.getElementById("interval");

saveButton.addEventListener("click", function (event) {
  event.preventDefault();
  const interval = parseInt(input.value);
  console.log("inside submit with interval value: ", interval);
  foreground.style.opacity = 1;
  (function fade() {
    console.log("boop");
    (foreground.style.opacity -=.1)< 0 ? foreground.style.display = "none" : setTimeout(fade,interval/40)
  })();
  hiddenMessage.style.display = "block";

})
