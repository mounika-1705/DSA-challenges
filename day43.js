// 🚀 Day 43 - DSA Challenge

// Hey Students

// Welcome to Day 43 of your DSA journey!

// 💡 Today’s Challenge - Round-Robin Task Scheduler

// Imagine you’re building a Round-Robin Task Scheduler for a CPU. Tasks are executed in a circular order, which makes a Circular Linked List the perfect structure! 

// 👉 Requirements:
// 1. Add Task at End → Insert a new task into the scheduler (end of list).
// 2. Add Task at Beginning → Insert a new task at the start of the list.
// 3. Display Tasks Once → Traverse the list once and print all tasks in order.
// 4. Simulate One Round of Execution → Traverse the circular list and print tasks as if the CPU executed each task once in round-robin order.

// ⚡ Input Example
// AddTask "Task1" at end  
// AddTask "Task2" at end  
// AddTask "Task3" at beginning  
// DisplayTasks  
// SimulateRound  

// ✅ Expected Output
// Task3 -> Task1 -> Task2  
// Executing: Task3  
// Executing: Task1  
// Executing: Task2  

// 🔎 Hint:
// * In a circular linked list, the last node points back to the head.
// * Carefully handle the empty list case when adding the first task.
// * For traversal, stop when you reach the head again.



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
