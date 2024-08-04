function createNode() {
  let value = null;
  let nextNode = null;
  function toString() {
    return `{ value: ${this.value}, nextNode: ${
      this.nextNode === null ? "null" : "Node (" + this.nextNode.value + ")"
    } }`;
  }
  return { value, nextNode, toString };
}

export { createNode };
