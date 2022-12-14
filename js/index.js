let currentFrame = 0;
let intervalId = null;

const addTrailingZeros = (num, totalLength) => {
  return String(num).padStart(totalLength, '0');
}

const changeSprite = (spriteNumber) => {
  const sprite = document.querySelector('#sprite');
  sprite.src = `./img/tile${addTrailingZeros(spriteNumber, 3)}.png`
}

const nextFrame = () => {
  currentFrame++;
  if(currentFrame > 99) { currentFrame = 0; }
  changeSprite(currentFrame);
}

const setButtonText = text => document.querySelector("#toggle-animation").innerHTML = text;
const setToggleTimeInputStatus = enabled => document.querySelector("#frame-time").disabled = !enabled;

const toggleAnimation = () => {
  if(intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    setButtonText("START");
    setToggleTimeInputStatus(true);
    return;
  }

  const frameTime = document.querySelector("#frame-time").value;
  intervalId = setInterval(nextFrame, frameTime);
  setButtonText("STOP");
  setToggleTimeInputStatus(false);
}