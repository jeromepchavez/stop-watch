var $startbutton = document.querySelector('.start-button')
var $resetbutton = document.querySelector('.reset-button')
var $elapsedTime = document.querySelector('#elapsed-time')
var isTimeRunning = false;
var intervalTime

function updateTime () {
  $elapsedTime.textContent = parseInt($elapsedTime.textContent) + 1
}

function toggleReset () {
  var displaySetting = $resetbutton.style.display;
  if (displaySetting === 'block') {
    $resetbutton.style.display = 'none'
  }
  else {
    $resetbutton.style.display = 'block'
  }
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
    if (parseInt($elapsedTime.textContent) === 0) {
      toggleReset()
    }
    isTimeRunning = true;
  }
})
