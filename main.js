var $button = document.querySelector('.start-button')
var $elapsedTime = document.querySelector('#elapsed-time')
var isTimeRunning = false;

function updateTime () {
  $elapsedTime.textContent = parseInt($elapsedTime.textContent) + 1
}


$button.addEventListener('click', function () {
  isTimeRunning = !isTimeRunning
  setInterval(updateTime, 1000)
})
