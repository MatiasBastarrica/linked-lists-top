import { Node } from "./node";

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    this.tail = new Node(value);
  }

  prepend(value) {
    const nextNode = this.head;
    this.head = new Node(value, nextNode);
  }
}
