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