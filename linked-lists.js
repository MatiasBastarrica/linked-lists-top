import { Node } from "./node";

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const prevNode = this.tail;
    this.tail = new Node(value);
    prevNode.nextNode = this.tail;
  }

  prepend(value) {
    const nextNode = this.head;
    this.head = new Node(value, nextNode);
  }
}
