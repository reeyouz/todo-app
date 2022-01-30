class ListNode {
  constructor(value = null, next = null, previous = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(value) {
    const node = new ListNode(value, null, this.tail);
    if (!this.tail) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    return ++this.size;
  }

  pop() {
    if (!this.tail) return null;
    const value = this.tail.value;
    this.tail = this.tail.previous;
    if (!this.tail) {
      this.head = null;
    } else {
      this.tail.next = null;
    }
    this.size--;
    return value;
  }

  unshift(value) {
    const node = new ListNode(value, this.head, null);
    if (!this.head) {
      this.tail = node;
    } else {
      this.head.previous = node;
    }
    this.head = node;
    return ++this.size;
  }

  shift() {
    if (!this.head) return null;
    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    } else {
      this.head.previous = null;
    }
    this.size--;
    return value;
  }
}

const list = new DoublyLinkedList();
list.push(23);
list.push(34);
list.push(45);
list.push(54);

// STACK - LIFO
// #unshift
// #shift
// QUEUE - FIFO
// #push
// shift
