class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    const removedNode = this.top;
    this.top = this.top.next;
    this.length--;
    return removedNode.value;
  }

  size() {
    return this.length;
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.pop()); // Output: 3
console.log(myStack.size()); // Output: 2
