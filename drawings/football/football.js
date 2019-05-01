// DOM elements
const flags = document.querySelectorAll('.flagCircle');
const field = document.querySelector('.fieldArea')
const centerCircle = document.querySelector('.centerCircle')
const singleFlag = document.querySelector('.flagCircle');

// DOM element height
let flagHeight = singleFlag.offsetHeight
let centerCircleHeight = centerCircle.offsetHeight


// Adding the values on the initial load
for (const flag of flags) {
  flag.setAttribute('style', 'width: ' + flagHeight + 'px;');
}
centerCircle.setAttribute('style', 'width: ' + centerCircleHeight + 'px;');

// a function to reset the values
function getNewValuesAfterResize() {

  centerCircleHeight = centerCircle.offsetHeight
  flagHeight = singleFlag.offsetHeight
  // fieldWidth = field.offsetWidth
  centerCircle.setAttribute('style', 'width: ' + centerCircleHeight + 'px;');

  for (const flag of flags) {
    flag.setAttribute('style', 'width: ' + flagHeight + 'px;');
  }
}

// Envoking the function on window reszie
window.onresize = getNewValuesAfterResize;