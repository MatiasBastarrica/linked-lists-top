import { Node } from "./node.js";

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    if (!this.head) {
      this.prepend(value);
    } else {
      const prevNode = this.tail;
      this.tail = new Node(value);
      prevNode.nextNode = this.tail;
    }
  }

  prepend(value) {
    const nextNode = this.head;
    this.head = new Node(value, nextNode);
  }

  size() {
    let total = 0;
    if (!this.head) {
      return 0;
    } else if (!this.head.nextNode) {
      return 1;
    }

    for (
      let currentNode = this.head;
      this.head.nextNode;
      currentNode = this.head.nextNode
    ) {
      total += 1;
    }

    return size;
  }
}
