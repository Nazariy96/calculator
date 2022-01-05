const createNode = (nodeName, className, nodeLocation) => {
  const node = document.createElement(nodeName);
  node.className = className;
  document.querySelector(nodeLocation).appendChild(node);
}

createNode("div","c-calc","body")

createNode("div","c-calc_input", ".c-calc")
createNode("div","c-calc_btns", ".c-calc")

createNode("input", "c-calc_input-prev", ".c-calc_input");
createNode("input", "c-calc_input-curr", ".c-calc_input");
  










