var $startbutton = document.querySelector('.start-button')
var $resetbutton = document.querySelector('.reset-button')
var $elapsedTime = document.querySelector('#elapsed-time')
var $timelimit = document.querySelector('.time-limit-value')
var $limitMessage = document.getElementById('message')
var isTimeRunning = false;
var intervalTime



function updateTime () {
  var userTimeLimit = parseInt($timelimit.value)
  var elapsedTimeInt = parseInt($elapsedTime.textContent)
  if (userTimeLimit === elapsedTimeInt) {
    clearInterval(intervalTime)
    expiredTime()
  }
  else {
    $elapsedTime.textContent = elapsedTimeInt + 1
  }
}

function expiredTime () {
  $elapsedTime.classList.add('expiredTime')
  $limitMessage.style.visibility = 'visible'

}

function resetTime () {
  clearInterval(intervalTime)
  $startbutton.textContent = 'Start'
  $elapsedTime.textContent = '0'
  $resetbutton.style.display = 'none'
  $limitMessage.style.visibility = 'hidden'
  $startbutton.classList.remove('running')
  $elapsedTime.classList.remove('expiredTime')
  isTimeRunning = false
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

function timeStart() {
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
}

$startbutton.addEventListener('click', timeStart)
$resetbutton.addEventListener('click', resetTime)
