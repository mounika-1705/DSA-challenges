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


