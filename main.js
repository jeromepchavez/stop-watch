var $button = document.querySelector('.start-button')
var $elapsedTime = document.querySelector('#elapsed-time')
var isTimeRunning = false;
var intervalTime

function updateTime () {
  $elapsedTime.textContent = parseInt($elapsedTime.textContent) + 1
}

$button.addEventListener('click', function () {
  if (isTimeRunning){
    clearInterval(intervalTime)
    isTimeRunning = false
  }
  else {
    intervalTime = setInterval(updateTime, 1000)
    isTimeRunning = true;
  }
})
