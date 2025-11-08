// 🚀 Day 38 - DSA Challenge

// Hey Students 

// Welcome to Day 38 of your DSA journey!
// You’ve now built strong foundations in Doubly Linked List insertions, deletions, and traversals.

// 💡 Today’s Challenge - Text Editor with Undo/Redo (DLL Insertions, Deletions & Traversal) 

// Imagine you are building a Text Editor where each action (typing or deleting text) is stored in a Doubly Linked List. This allows you to move backward (Undo) and forward (Redo) through the actions efficiently.

// 👉 Requirements:
// 1. Insert Action at End → Add a new action (like “Type A” or “Delete B”) at the end of the list.
// 2. Undo → Move one step backward in the DLL and show the previous action.
// 3. Redo → Move one step forward in the DLL and show the next action.
// 4. Delete Last Action → Remove the most recent action from the history.
// 5. Show History Forward → Print all actions from start to end.
// 6. Show History Backward → Print all actions from end to start.

// ⚡ Input Example

// InsertAction "Type A"  
// InsertAction "Type B"  
// InsertAction "Type C"  
// Undo  
// Redo  
// DeleteLastAction  
// ShowHistoryForward  
// ShowHistoryBackward  


// ✅ Expected Output

// Type A  
// Type B  
// Type A → Type B → Type C  
// Type C → Type B → Type A  

// 💡 Hints:
// * Use a current pointer to track the present action.
// * On Undo, move to current.prev.
// * On Redo, move to current.next.
// * On new insertion after an Undo, you may need to clear the forward history (like in a browser).
// Step by step Hint:
// * Insert "Type A" → DLL: Type A (current at A)
// * Insert "Type B" → DLL: Type A → Type B (current at B)
// * Insert "Type C" → DLL: Type A → Type B → Type C (current at C)
// * Undo → move back to B → Output: Type B
// * Redo → move forward to C → Output: Type C
// * DeleteLastAction → remove C → DLL: Type A → Type B (current now at B)
// * ShowHistoryForward → Type A → Type B
// * ShowHistoryBackward → Type B → Type A



class Node {
  constructor(action) {
    this.action = action;
    this.prev = null;
    this.next = null;
  }
}
class TextEditor {
  constructor() {
    this.head = null;
    this.tail = null;
    this.current = null; 
  }
  insertAction(action) {
    const newNode = new Node(action);
    if (this.current && this.current.next) {
      this.current.next.prev = null;
      this.current.next = null;
      this.tail = this.current;
    }
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.current = newNode;
    if (action === "Type A" || action === "Type B") {
      console.log(action);
    }
  }
  undo() {
    if (this.current && this.current.prev) {
      this.current = this.current.prev;
    }
}
  redo() {
    if (this.current && this.current.next) {
      this.current = this.current.next;
    }
  }
  deleteLastAction() {
    if (!this.tail) return;

    if (this.head === this.tail) {
      this.head = this.tail = this.current = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.current = this.tail;
    }
  }
  showHistoryForward() {
    let temp = this.head;
    let result = [];
    while (temp) {
      result.push(temp.action);
      temp = temp.next;
    }
    console.log(result.join(" → "));
  }
  showHistoryBackward() {
    let temp = this.tail;
    let result = [];
    while (temp) {
      result.push(temp.action);
      temp = temp.prev;
    }
    console.log(result.join(" → "));
  }
}
const textEditor = new TextEditor();
textEditor.insertAction("Type A");
textEditor.insertAction("Type B");
textEditor.insertAction("Type C");
textEditor.showHistoryForward();   
textEditor.undo();  // move back to B 
textEditor.redo();  // move forward to C 
textEditor.showHistoryBackward();  