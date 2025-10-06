class Node {
  constructor(name) {
    this.name = name;
    this.next = null;
  }
}

class RoundTable {
  constructor() {
    this.head = null;
    this.tail = null;
    this.current = null; 
  }

  addParticipant(name) {
    const newNode = new Node(name);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head;
      this.current = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    }
  }

  removeParticipant(name) {
    if (!this.head) return;
    let curr = this.head;
    let prev = this.tail;

    do {
      if (curr.name === name) {
        if (curr === this.head) this.head = curr.next;
        if (curr === this.tail) this.tail = prev;
        prev.next = curr.next;
        if (this.current === curr) this.current = curr.next;
        if (this.head === this.tail && this.head.name === name) {
          this.head = this.tail = this.current = null;
        }
        return;
      }
      prev = curr;
      curr = curr.next;
    } while (curr !== this.head);
  }

  showParticipants() {
    if (!this.head) return "No participants";
    let result = [];
    let temp = this.head;
    do {
      result.push(temp.name);
      temp = temp.next;
    } while (temp !== this.head);
    return result.join(" -> ");
  }

  skipAndSelect(k) {
    if (!this.current) return "No participants";
    let temp = this.head;
    for (let i = 0; i < k; i++) {
        temp = temp.next;
      // this.current = this.current.next;
    }
    //return `Selected: ${this.current.name}`;
    return `Selected: ${temp.name}`;
  }
}

const meeting = new RoundTable();
meeting.addParticipant("Alice");
meeting.addParticipant("Bob");
meeting.addParticipant("Charlie");
meeting.addParticipant("Diana");

console.log(meeting.showParticipants()); 
console.log(meeting.skipAndSelect(3));   

meeting.removeParticipant("Charlie");
console.log(meeting.showParticipants()); 
console.log(meeting.skipAndSelect(4));   