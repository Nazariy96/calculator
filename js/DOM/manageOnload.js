window.onload = () => {
  createBtns();
};

document.ondragstart = function (e) {
  return false;
};
document.ondragend = function (e) {
  return false;
};
document.onpaste = function (e) {
  return false;
};

const alowKey = [
  "Backspace",
  "(",
  ")",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "%",
  ".",
  "+",
  "-",
  "/",
  "ArrowLeft",
  "ArrowRight"
];
document.onkeydown = function (e) {
  if (!alowKey.includes(e.key)) {
      if(e.key === "Enter"){
          solution()
      }
    return false;
  }
};