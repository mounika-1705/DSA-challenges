class Node {
  constructor(taskName) {
    this.taskName = taskName;
    this.next = null;
  }
}

class TaskScheduler {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addTaskAtEnd(taskName) {
    const newNode = new Node(taskName);
    if (!this.head) {
      this.head = this.tail = newNode;
      newNode.next = newNode; // circular link
      return;
    }

    this.tail.next = newNode;
    newNode.next = this.head;
    this.tail = newNode;
  }

  addTaskAtBeginning(taskName) {
    const newNode = new Node(taskName);

    if (!this.head) {
      this.head = this.tail = newNode;
      newNode.next = newNode; // circular link
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.tail.next = this.head; // maintain circular link
  }

  displayTasks() {
    if (!this.head) {
      console.log("No tasks scheduled.");
      return;
    }
    let current = this.head;
    const result = [];
    do {
      result.push(current.taskName);
      current = current.next;
    } while (current !== this.head);

    console.log(result.join(" -> "));
  }

  simulateRound() {
    if (!this.head) {
      console.log("No tasks to execute.");
      return;
    }
    let current = this.head;
    do {
      console.log("Executing:", current.taskName);
      current = current.next;
    } while (current !== this.head);
  }
}
const tasks = new TaskScheduler();

tasks.addTaskAtEnd("Task1");
tasks.addTaskAtEnd("Task2");
tasks.addTaskAtBeginning("Task3");
tasks.displayTasks(); 
tasks.simulateRound();
