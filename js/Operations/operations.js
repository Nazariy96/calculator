let currOutput = document.querySelector(".c-calc_input-curr");
let prevOutput = document.querySelector(".c-calc_input-prev");

const displayNum = (val) => {
  currOutput.value += val;
};

const deleteNum = () => {
  currOutput.value = currOutput.value.slice(0, -1);
};

const clearAll = () => {
  currOutput.value = "";
  prevOutput.value = "";
  let localData = JSON.parse(localStorage.getItem("prevData"));
  if (localData.length > 5) {
    localData.splice(6);
    localStorage.setItem("prevData", JSON.stringify(localData));
  }
};

let prevData = [];
const solution = () => {
  let btnRound = document.querySelector(".prec");
  let data = currOutput.value;
  let res;

  const evalStr = (str) => {
    let sol = new Function("return " + str)();
    return sol;
  };
  
  btnRound.value === "false"
    ? (res = evalStr(data))
    : (res = parseFloat(evalStr(data)).toFixed(2));

  if (res === undefined || res === NaN) {
    return console.log("undefined or NaN");
  } else {
    let disRes = (prevOutput.value = data.concat(`=${res}`));
    currOutput.value = "";
    console.log(disRes);
    prevData.unshift(disRes);
    localStorage.setItem("prevData", JSON.stringify(prevData));
  }
};

const precision = () => {
  let btnRound = document.querySelector(".prec");
  btnRound.value === "false"
    ? (btnRound.value = "true")
    : (btnRound.value = "false");
};

const previous = () => {
  let dir = "prv";
  moveDir(dir);
};

const next = () => {
  let dir = "nxt";
  moveDir(dir);
};

const moveDir = (dir) => {
  let localData = JSON.parse(localStorage.getItem("prevData"));
  if (localData === null) {
    console.log("no record´s found");
  } else if (
    (localData.length && prevOutput.value === "") ||
    (localData.length && currOutput.value === "")
  ) {
    let prevValPos = (prevOutput.value = localData[0]);
    currOutput.value = prevValPos.split("=")[1];
  } else {
    let opPosition = localData.indexOf(prevOutput.value);
    if (prevOutput.value === localData[opPosition]) {
      switch (dir) {
        case "prv":
          opPosition += 1;
          if (opPosition === localData.length) {
            opPosition -= 1;
            console.log("end of record´s");
            opPosition = 0;
            return;
          }
          break;
        case "nxt":
          opPosition -= 1;
          if (opPosition === -1) {
            opPosition = 0;
            console.log("start of record´s");
            return;
          }
          break;
        default:
          throw Error("no case found");
      }
      let prevValPos = (prevOutput.value = localData[opPosition]);
      currOutput.value = prevValPos.split("=")[1];
    }
  }
};
