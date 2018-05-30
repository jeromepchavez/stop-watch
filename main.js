var $startbutton = document.querySelector('.start-button')
var $elapsedTime = document.querySelector('#elapsed-time')
var isTimeRunning = false;
var intervalTime

function updateTime () {
  $elapsedTime.textContent = parseInt($elapsedTime.textContent) + 1
}

$startbutton.addEventListener('click', function () {
  if (isTimeRunning){
    clearInterval(intervalTime)
    $startbutton.classList.remove('running')
    $startbutton.textContent = 'Resume'
    isTimeRunning = false
  }
  else {
    intervalTime = setInterval(updateTime, 1000)
    $startbutton.textContent = 'Pause'
    $startbutton.classList.add('running')
    isTimeRunning = true;
  }
})
