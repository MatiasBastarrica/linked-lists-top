import { Node } from "./node.js";

export class LinkedList {
  constructor() {
    this.headNode = undefined;
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
      return this.headNode;
    } else {
      return this.headNode.value;
    }
  }
}
