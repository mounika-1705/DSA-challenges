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