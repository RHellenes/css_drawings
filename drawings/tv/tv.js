const tvframe = document.querySelector('.js-tv-frame--width')
let tvWidthSize = tvframe.offsetWidth
let tvHeightSize = tvWidthSize * 0.5625;


tvframe.setAttribute('style', `height: ${tvHeightSize}px;`)