// GMAIL BLOCK
const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

// \. - means literal dot
const regExp = /^[\w.+-]+@gmail\.com$/;

gmailButton.onclick = () => {
  if (regExp.test(gmailInput.value)) {
    gmailResult.innerHTML = "OK";
    gmailResult.style.color = "green";
  } else {
    gmailResult.innerHTML = "NOT OK";
    gmailResult.style.color = "red";
  }
};

//MOVE BLOCK FULLY

const parentBlock = document.querySelector(".parent_block");
let childBlock = document.querySelector(".child_block");

let positionX = 0,
  positionY = 0;

const offsetWidth = parentBlock.clientWidth - childBlock.clientWidth;
const offsetHeight = parentBlock.clientHeight - childBlock.clientHeight;

const movingBlock = () => {
  requestAnimationFrame(movingBlock);
  childBlock.style.left = `${positionX}px`;
  childBlock.style.top = `${positionY}px`;

  if (positionX < offsetWidth && positionY === 0) positionX++; //move right
  else if (positionX >= offsetWidth && positionY < offsetHeight)
    positionY++; //move down
  else if (positionY >= offsetHeight && positionX > 0) positionX--; //moves left
  else if (positionX <= 0 && positionY > 0) positionY--; //moves up
};
movingBlock();

//Stopwatch

const seconds = document.querySelector("#seconds");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetbtn = document.querySelector("#reset");

let num = 0;
let intervalId = null;

// Start btn
startBtn.onclick = () => {
  if (intervalId === null) {
    intervalId = setInterval(() => {
      num++;
      seconds.innerHTML = num;
    }, 1000);
  }
};

// Stop Btn
stopBtn.onclick = () => {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

//Reset btn
resetbtn.onclick = () => {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
  num = 0;
  seconds.innerHTML = num;
};
