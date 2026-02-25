import { Node } from "./node";

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    this.tail = new Node(value);
  }
}
