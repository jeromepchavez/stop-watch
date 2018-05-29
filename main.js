var $button = document.querySelector('.start-button')
var $elapsedTime = document.querySelector('#elapsed-time')

function updateTime () {
  $elapsedTime.textContent = parseInt($elapsedTime.textContent) + 1
}


$button.addEventListener('click', function () {
  setInterval(updateTime, 1000)
})
