const createBtns = () => {
  
  const btnSymbols = [
    "CE",
    "<<",
    ">>",
    "DEL",
    "(",
    "F",
    ")",
    "%",
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

  for (const symbol of btnSymbols) {

    const btn = document.createElement("button");
    btn.innerHTML = symbol;
    btn.className = "c-calc_btns-btn";

    if (
      symbol !== "CE" &&
      symbol !== "DEL" &&
      symbol !== "=" &&
      symbol !== "<<" &&
      symbol !== ">>" &&
      symbol !== "F" 
    ) {
      btn.onclick = () => {
        displayNum(symbol);
      };
    } else {
      let f;

      if (symbol === ">>") {
        f = next;
        btn.className += " nxt";
      }
      if (symbol === "<<") {
        f = previous;
        btn.className += " prv";
      }
      if (symbol === "CE") {
        f = clearAll;
        btn.className += " clr";
      }
      if (symbol === "DEL") {
        f = deleteNum;
        btn.className += " del";
      }
      if (symbol === "=") {
        f = solution;
        btn.className += " sol";
      }
      if (symbol === "F") {
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
