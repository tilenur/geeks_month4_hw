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

//MOVE BLOCK

let blockMove = document.querySelector(".child_block");
let positionX = 0;

const movingBlock = () => {
  blockMove.style.left = positionX + "px";
  positionX++;
  if (positionX < 450) {
    requestAnimationFrame(movingBlock);
  }
};
movingBlock();
