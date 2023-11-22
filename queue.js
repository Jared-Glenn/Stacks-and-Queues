/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    
    const newVal = new Node(val);

    if (!this.first) {
      this.first = newVal;
      this.last = newVal;
      this.size = 1;
    }
    else {
      this.last.next = newVal;
      this.last = newVal;
      this.size += 1;
    }
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size === 0) {
      throw new Error("Queue is empty. No values available.")
    }
    else if (this.first === this.last) {
      const val = this.first.val;

      this.first = null;
      this.last =  null;
      this.size = 0;

      return val;
    }
    else {
      const val = this.first.val;

      this.first = this.first.next;
      this.size -= 1;

      return val;
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.size === 0) {
      throw new Error("Queue is empty. No values available.")
    }
    else {
      return this.first.val;
    }
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (this.size === 0) {
      return true;
    }
    return false;
  }
}

module.exports = Queue;
