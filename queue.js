class Queue {
  constructor() {
    this.queue = [];
  }

  //add, remove, peek, size, front, isEmpty
  add(item) {
    this.queue.push(item);
  }

  remove() {
  const sortered = this.queue.sort((a,b) => a.priority - b.priority)
  sortered.shift()
  }

  peek() {
    console.log(this.queue);
  }

  size() {
    console.log(this.queue.length);
  }

  isEmpty() {
    if (this.queue.length === 0) {
      return true;
    }
    return false;
  }

  front(){
    console.log('First element:',this.queue[0])
  }
}

let queue = new Queue();

queue.add({ name: "Dog", priority: 3 });
queue.add({ name: "Cat", priority: 1 });
queue.add({ name: "Bird", priority: 7 });
queue.add({ name: "Fish", priority: 5 });

queue.peek();
queue.size();
queue.front();
console.log(queue.isEmpty());

queue.remove()
queue.peek();