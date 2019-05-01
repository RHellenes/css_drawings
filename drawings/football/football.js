const flags = document.querySelectorAll('.flagCircle');
const field = document.querySelector('.fieldArea')
const centerCircle = document.querySelector('.centerCircle')
const singleFlag = document.querySelector('.flagCircle');

//let fieldHeight = field.offsetHeight
//let fieldWidth = field.offsetWidth
let flagHeight = singleFlag.offsetHeight
let centerCircleHeight = centerCircle.offsetHeight
//let centerCircleWidth = singleFlag.offsetWidth


for (const flag of flags) {
  flag.setAttribute('style', 'width: ' + flagHeight + 'px;');
}
centerCircle.setAttribute('style', 'width: ' + centerCircleHeight + 'px;');
console.log(centerCircleHeight);
//console.log(centerCircleWidth);


function getNewValuesAfterResize() {

  centerCircleHeight = centerCircle.offsetHeight
  flagHeight = singleFlag.offsetHeight
  // fieldWidth = field.offsetWidth
  centerCircle.setAttribute('style', 'width: ' + centerCircleHeight + 'px;');

  for (const flag of flags) {
    flag.setAttribute('style', 'width: ' + flagHeight + 'px;');
  }
}




window.onresize = getNewValuesAfterResize;