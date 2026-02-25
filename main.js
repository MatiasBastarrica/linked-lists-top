import { LinkedList } from "./linked-lists.js";

const list = new LinkedList();

list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

// console.log(list);
// console.log(list.headNode.nextNode.nextNode.nextNode.nextNode.nextNode);
// console.log(list.size());
// console.log(list.head());
// console.log(list.tail());
console.log(list.at(30));
