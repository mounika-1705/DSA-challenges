// 🚀 Day 45 - DSA Challenge

// Hey Students 

// Welcome to Day 45 of your DSA journey!
// You’ve already explored circular linked lists with schedulers and playlists. Today, let’s tackle a slightly more complex real-world problem using insertion and traversal.

// 💡 Today’s Challenge - Circular Queue of Printers 

// Imagine you’re designing a Printer Queue System for an office. Multiple printers are connected in a circular network, and print jobs are assigned in a round-robin fashion.

// 👉 Requirements:
// 1. AddPrinter → Insert a new printer into the circular queue (end of list).
// 2. ShowPrinters → Traverse once and print all printers in the queue.
// 3. AssignJobs(k) → Simulate job assignment for k jobs in round-robin order (traverse circularly k times and print the printer assigned each job).

// ⚡ Input Example
// AddPrinter "Printer1"  
// AddPrinter "Printer2"  
// AddPrinter "Printer3"  
// ShowPrinters  
// AssignJobs k=7  

// ✅ Expected Output
// Printer1 -> Printer2 -> Printer3  
// Job assigned to: Printer1  
// Job assigned to: Printer2  
// Job assigned to: Printer3  
// Job assigned to: Printer1  
// Job assigned to: Printer2  
// Job assigned to: Printer3  
// Job assigned to: Printer1  

// 🔎 Hints
// * Use circular traversal for assigning jobs.
// * When k is larger than the number of printers, wrap around using the circular property.
// * Edge case: If no printers are available, handle gracefully.



class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularQueue {
  constructor() {
    this.head = null;
  }

  addPrinter(printerName) {
    let newNode = new Node(printerName);

    if (!this.head) {
      newNode.next = newNode;
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next !== this.head) {
      current = current.next;
    }
    
    current.next = newNode;
    newNode.next = this.head;
  }

  showPrinters() {
    if (!this.head) {
      console.log("No printers available.");
      return;
    }

    let result = [];
    let current = this.head;
    do {
      result.push(current.data);
      current = current.next;
    } while (current !== this.head);

    console.log(result.join(" -> "));
  }

  assignJobs(k) {
    if (!this.head) {
      console.log("No printers available to assign jobs.");
      return;
    }

    let current = this.head;
    for (let i = 0; i < k; i++) {
      console.log("Job assigned to: " + current.data);
      current = current.next;
    }
  }
}

let printers = new CircularQueue();
printers.addPrinter("Printer1");
printers.addPrinter("Printer2");
printers.addPrinter("Printer3");
printers.showPrinters();
printers.assignJobs(7);