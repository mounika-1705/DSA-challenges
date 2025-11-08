// 🚀 Day 41 - DSA Challenge

// Hey Students 

// Welcome to Day 41 of your DSA journey! 
// Today, we’re stepping into Circular Linked Lists (CLL) a powerful variation of linked lists where the last node points back to the head, forming a circle.

// 💡 Today’s Challenge - Circular Queue of Players 

// Imagine you’re designing a Game Queue System where players are arranged in a circle. This allows the game to cycle through players endlessly.

// 👉 Requirements:
// 1. Insert Player at End → Add a new player at the end of the circle.
// 2. Insert Player at Beginning → Add a new player at the start of the circle.
// 3. Traverse Forward → Print the players in circular order (stop once you complete one full cycle).
// 4. Traverse Multiple Rounds → Print players for k rounds to simulate the game cycling.

// ⚡ Input Example

// InsertEnd "Alice"  
// InsertEnd "Bob"  
// InsertEnd "Charlie"  
// InsertBeginning "Zara"  
// TraverseForward  
// TraverseRounds 2  


// ✅ Expected Output

// Zara → Alice → Bob → Charlie  
// Zara → Alice → Bob → Charlie → Zara → Alice → Bob → Charlie  

// 💡 Hints:
// * In CLL, tail.next = head.
// * Be careful while traversing stop when you reach the head again (to avoid infinite loops).
// * For multiple rounds, you can keep looping until you’ve printed k * size elements.



class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  
  insertAtHead(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
      newNode.next = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = this.head;
    }
    this.size++;
  }

  insertAtTail(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
      newNode.next = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    }
    this.size++;
  }

  traverseForward() {
    let result = [];
    if (!this.head) return;
    let current = this.head;
    do {
      result.push(current.data);
      current = current.next;
    } while (current !== this.head);
    console.log(result.join(" → "));
  }

  traverseRounds(k) {
    const result = [];
    if (!this.head) return;
    let current = this.head;
    for (let i = 0; i < k * this.size; i++) {
      result.push(current.data);
      current = current.next;
    }
    console.log(result.join(" → "));
  }
}
const players = new CircularList();
players.insertAtTail("Alice");
players.insertAtTail("Bob");
players.insertAtTail("Charlie");
players.insertAtHead("Zara");
players.traverseForward();         
players.traverseRounds(2); 
//players.traverseRounds(4);