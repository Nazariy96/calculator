const createBtns = () => {
  
  const btnSymbol = [
    "CE",
    "<<",
    ">>",
    "DEL",
    "(",
    "%",
    "F",
    ")",
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    ".",
    "0",
    "=",
    "/",
  ];

  for (let i = 0; i < btnSymbol.length; i++) {
    const e = btnSymbol[i];

    const btn = document.createElement("button");
    btn.innerHTML = e;
    btn.className = "c-calc_btns-btn";

    if (
      e !== "CE" &&
      e !== "DEL" &&
      e !== "=" &&
      e !== "<<" &&
      e !== ">>" &&
      e !== "F"
    ) {
      btn.onclick = () => {
        displayNum(e);
      };
    } else {
      let f;

      if (e === ">>") {
        f = next;
        btn.className += " nxt";
      }
      if (e === "<<") {
        f = previous;
        btn.className += " prv";
      }
      if (e === "CE") {
        f = clearAll;
        btn.className += " clr";
      }
      if (e === "DEL") {
        f = deleteNum;
        btn.className += " del";
      }
      if (e === "=") {
        f = solution;
        btn.className += " sol";
      }
      if (e === "F") {
        f = precision;
        btn.className += " prec";
        btn.value = false;
      }

      btn.onclick = () => {
        f();
      };
    }

    const container = document.querySelector(".c-calc_btns");
    container.appendChild(btn);
  }
};
