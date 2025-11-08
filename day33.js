// 🚀 Day 33 - DSA Challenge

// Hey Students 

// Welcome to Day 33 of your DSA journey!
// You’ve now practiced insertion, deletion, and even simulated browser history. Today, we’ll apply Linked List operations to another real-world scenario.

// 💡 Today’s Challenge – Task Manager with Singly Linked List

// Imagine you’re building a Task Manager App where tasks are stored in a Singly Linked List.

// 👉 Requirements:
// 1. Add Task at End → Insert a new task at the end of the list.
// 2. Add Task at Beginning → Insert a new task at the start of the list.
//    3. Delete Task by Name → Remove the first occurrence of a task by its name.
//    4. Delete Task by Position → Remove a task at a specific position (1-based index).
// 5. Show Tasks → Print the current list of tasks.

// ⚡ Input Example

// AddTask “Finish Homework” at end  
// AddTask “Buy Groceries” at end  
// AddTask “Morning Workout” at beginning  
// DeleteTask “Buy Groceries”  
// DeleteTask at position 2  
// ShowTasks

// ✅ Expected Output

// Morning Workout → Finish Homework → Buy Groceries  
// Morning Workout → Finish Homework  
// Finish Homework



class Node {
    constructor(task) {
        this.task = task;
        this.next = null;
    }
}
class TaskManager {
    constructor() {
        this.head = null;
    }
    addTaskAtEnd(task) {
        let newNode = new Node(task);

        if (!this.head) {
            this.head = newNode;
            return;
        }
        let temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }
        temp.next = newNode;
    }
    addTaskAtBeginning(task) {
        let newNode = new Node(task);
        newNode.next = this.head;
        this.head = newNode;
    }
    deleteTaskByName(task) {
        if (!this.head) return;
        if (this.head.task === task) {
            this.head = this.head.next;
            return;
        }
        let temp = this.head;
        while (temp.next && temp.next.task !== task) {
            temp = temp.next;
        }
        if (temp.next) {
            temp.next = temp.next.next;
        }
    }
    deleteTaskByPosition(position) {
        if (!this.head || position <= 0) return;

        if (position === 1) {
            this.head = this.head.next;
            return;
        }
        let temp = this.head;
        let count = 1;

        while (temp && count < position - 1) {
            temp = temp.next;
            count++;
        }
        if (temp && temp.next) {
            temp.next = temp.next.next;
        }
    }
    showTasks() {
        let tasks = [];
        let temp = this.head;

        while (temp) {
            tasks.push(temp.task);
            temp = temp.next;
        }
        console.log(tasks.join(" → "));
    }
}
let task = new TaskManager();
task.addTaskAtEnd("Finish Homework");
task.addTaskAtEnd("Buy Groceries");
task.addTaskAtBeginning("Morning Workout");
task.showTasks(); 
task.deleteTaskByName("Buy Groceries");
task.showTasks(); 
task.deleteTaskByPosition(2);
task.showTasks(); 


