// 🚀 Day 39 - DSA Challenge

// Hey Students 

// Welcome to Day 39 of your DSA journey!

// 💡 Today’s Challenge - Browser Tabs Manager (DLL Insertions, Deletions & Traversal) 

// Imagine you’re designing a Browser Tabs Manager. Each tab is represented as a node in a Doubly Linked List, allowing quick navigation forward and backward.

// 👉 Requirements:
// 1. Open New Tab at End → Insert a new tab at the end.
// 2. Open New Tab at Position → Insert a new tab at a given position (0-based).
// 3. Close Tab at Position → Delete the tab at a given position.
// 4. Move Next Tab → Traverse forward by one step.
// 5. Move Previous Tab → Traverse backward by one step.
// 6. Show All Tabs Forward → Print tabs left to right.
// 7. Show All Tabs Backward → Print tabs right to left.

// ⚡ Input Example

// OpenTabEnd "Google"  
// OpenTabEnd "YouTube"  
// OpenTabEnd "GitHub"  
// OpenTabAt 1 "LinkedIn"  
// ShowForward  
// CloseTabAt 2  
// ShowForward  
// MoveNext  
// MovePrev  
// ShowBackward  


// ✅ Expected Output

// Google → LinkedIn → YouTube → GitHub  
// Google → LinkedIn → GitHub  
// LinkedIn  
// Google  
// GitHub → LinkedIn → Google  

// 💡 Hints:
// * Maintain a currentTab pointer to know where the user is.
// * For OpenTabAt and CloseTabAt, carefully handle edge cases like position = 0 (head), position = size (tail), or invalid indexes.
// * Traversal both ways is straightforward with DLL.



class Node {
  constructor(tab) {
    this.tab = tab;
    this.prev = null;
    this.next = null;
  }
}
class Browser {
  constructor() {
    this.head = null;
    this.tail = null;
    this.current = null; 
  }
  openTabEnd(tab) {
    const newNode = new Node(tab);
    if (!this.head) {
      this.head = this.tail = this.current = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
}
  openTabAt(index, tab) {
    if (index < 0) return;
    const newNode = new Node(tab);
    if (index === 0) {
      newNode.next = this.head;
      if (this.head) this.head.prev = newNode;
      this.head = newNode;
      if (!this.tail) this.tail = newNode;
      return;
    }
    let temp = this.head;
    let i = 0;
    while (temp && i < index - 1) {
      temp = temp.next;
      i++;
    }
    if (!temp) return; 
    newNode.next = temp.next;
    newNode.prev = temp;
    if (temp.next) temp.next.prev = newNode;
    temp.next = newNode;
    if (temp === this.tail) this.tail = newNode;
  }
  closeTabAt(index) {
    if (!this.head || index < 0) return;
    if (index === 0) {
      if (this.current === this.head) this.current = this.head.next;
      this.head = this.head.next;
      if (this.head) this.head.prev = null;
      else this.tail = null;
      return;
    }
    let temp = this.head;
    let i = 0;
    while (temp && i < index) {
      temp = temp.next;
      i++;
    }
    if (!temp) return;
    if (this.current === temp) this.current = temp.next || temp.prev;
    if (temp.prev) temp.prev.next = temp.next;
    if (temp.next) temp.next.prev = temp.prev;
    if (temp === this.tail) this.tail = temp.prev;
  }
  moveNext() {
    if (this.current && this.current.next) {
      this.current = this.current.next;
      console.log(this.current.tab);
    }
  }
  movePrev() {
    if (this.current && this.current.prev) {
      this.current = this.current.prev;
      console.log(this.current.tab);
    }
  }
  showForward() {
    let temp = this.head;
    let result = [];
    while (temp) {
      result.push(temp.tab);
      temp = temp.next;
    }
    console.log(result.join(" → "));
  }
  showBackward() {
    let temp = this.tail;
    let result = [];
    while (temp) {
      result.push(temp.tab);
      temp = temp.prev;
    }
    console.log(result.join(" → "));
  }
}
const browser = new Browser();
browser.openTabEnd("Google");
browser.openTabEnd("YouTube");
browser.openTabEnd("GitHub");
browser.openTabAt(1, "LinkedIn");
browser.showForward();     
browser.closeTabAt(2);
browser.showForward();     
browser.moveNext();        
browser.movePrev();        
browser.showBackward();    