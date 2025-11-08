// 🚀 Day 46 - DSA Challenge

// Hey Students 

// Welcome to Day 46 of your DSA journey!
// So far, you’ve used Circular Linked Lists for schedulers, playlists, and queues. Today, let’s explore another real-world system where circular traversal is essential.

// 💡 Today’s Challenge - Token Ring Network Simulation 

// In computer networks, a Token Ring Protocol allows devices to pass a "token" around in a circular fashion to control communication. Let’s simulate this using a Circular Linked List.

// 👉 Requirements:
// 1. AddNode → Insert a new computer/node into the circular network (end of list).
// 2. ShowNetwork → Traverse once and display all nodes in the ring.
// 3. PassToken(k) → Starting from head, simulate passing the token k times around the ring and print which node has the token at each step.

// ⚡ Input Example
// AddNode "ComputerA"  
// AddNode "ComputerB"  
// AddNode "ComputerC"  
// ShowNetwork  
// PassToken k=6  

// ✅ Expected Output
// ComputerA -> ComputerB -> ComputerC  
// Token at: ComputerA  
// Token at: ComputerB  
// Token at: ComputerC  
// Token at: ComputerA  
// Token at: ComputerB  
// Token at: ComputerC  

// 🔎 Hints
// * Use circular traversal to wrap around once you reach the end.
// * For PassToken(k), continue traversal for exactly k steps.
// * Handle the empty network case (no nodes).


class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class TokenRing {
  constructor() {
    this.head = null;
  }

  addNode(nodeName) {
    let newNode = new Node(nodeName);

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

  showNetwork() {
    if (!this.head) {
      console.log("No nodes in the network.");
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

  passToken(k) {
    if (!this.head) {
      console.log("No nodes available to pass token.");
      return;
    }

    let current = this.head;
    for (let i = 0; i < k; i++) {
      console.log("Token at: " + current.data);
      current = current.next;
    }
  }
}


let network = new TokenRing();
network.addNode("ComputerA");
network.addNode("ComputerB");
network.addNode("ComputerC");
network.showNetwork();
network.passToken(6);