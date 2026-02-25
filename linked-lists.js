import { Node } from "./node.js";

export class LinkedList {
  constructor() {
    this.headNode = null;
    this.tailNode = null;
  }

  append(value) {
    if (!this.headNode) {
      this.prepend(value);
      this.tailNode = this.headNode;
    } else {
      const prevNode = this.tailNode;
      this.tailNode = new Node(value);
      prevNode.nextNode = this.tailNode;
    }
  }

  prepend(value) {
    const nextNode = this.headNode;
    this.headNode = new Node(value, nextNode);
  }

  size() {
    if (!this.headNode) {
      return 0;
    } else if (!this.headNode.nextNode) {
      return 1;
    }

    let total = 1;
    for (
      let currentNode = this.headNode;
      currentNode.nextNode;
      currentNode = currentNode.nextNode
    ) {
      total += 1;
    }

    return total;
  }

  head() {
    if (!this.headNode) {
      return undefined;
    } else {
      return this.headNode.value;
    }
  }

  tail() {
    if (!this.headNode) {
      return undefined;
    } else {
      return this.tailNode.value;
    }
  }

  at(index) {
    if (!this.headNode) {
      return undefined;
    }
    let currentIndex = 0;
    let node;
    for (
      let currentNode = this.headNode;
      currentIndex <= index;
      currentNode = currentNode.nextNode
    ) {
      currentIndex += 1;
      node = currentNode;
      if (currentNode == null) {
        break;
      }
    }

    if (node && node !== null) {
      return node.value;
    } else {
      return undefined;
    }
  }

  pop() {
    if (!this.headNode) {
      return undefined;
    }
    let removedNode = this.headNode;

    this.head = this.headNode.nextNode;

    return removedNode.value;
  }

  contains(value) {
    if (!this.headNode) {
      return false;
    }
    let result;
    for (
      let currentNode = this.headNode;
      currentNode !== null;
      currentNode = currentNode.nextNode
    ) {
      if (currentNode.value === value) {
        result = true;
        break;
      }
    }
    if (result) {
      return true;
    } else {
      return false;
    }
  }

  findIndex(value) {
    if (!this.head) {
      return -1;
    }

    let index = 0;
    let found = false;
    for (
      let currentNode = this.headNode;
      currentNode !== null;
      currentNode = currentNode.nextNode
    ) {
      if (currentNode.value === value) {
        found = true;
        break;
      }
      index += 1;
    }
    if (found) {
      return index;
    } else {
      return -1;
    }
  }
}
