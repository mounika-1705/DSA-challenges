// 🚀 Day 32 - DSA Challenge

// Hey Students 

// Welcome to Day 32 of your DSA journey! 
// 💡 Today’s Challenge - Browser History with Singly Linked List

// 👉 Requirements:
// 1️⃣ Visit a new URL → Insert at the end.
// 2️⃣ Go back → Move one step backward (but remember, in singly linked list you can’t directly go back think how you’ll handle this).
// 3️⃣ Go forward → Move one step forward in the list.
// 4️⃣ Show current page → Print the current node’s value.

// ⚡ Input Example
// Visit google.com  
// Visit github.com  
// Visit linkedin.com  
// Back  
// Forward  
// Visit stackoverflow.com  
// Show Current Page

// ✅ Expected Output
// google.com  
// github.com  
// linkedin.com  
// github.com  
// linkedin.com  
// stackoverflow.com  
// stackoverflow.com

//  Hint:
// 1. In a singly linked list, you can’t move backward directly.
// 2. To implement Back, you may need to traverse from the head each time until you reach the previous node.



class Node {
    constructor(url) {
        this.url = url;
        this.next = null;
    }
}
class BrowserHistory {
    constructor() {
        this.head = null;
        this.current = null;
    }
    visit(url) {
        let newNode = new Node(url);
        if (this.head === null) {
            this.head = newNode;
            this.current = newNode;
        } else {
            let temp = this.head;
            while (temp.next !== null) {
                temp = temp.next;
            }
            temp.next = newNode;
            this.current = newNode;
        }
        console.log(this.current.url);
    }
    backward() {
        if (this.current === this.head) {
            console.log("Cannot go back");
            return;
        }

        let temp = this.head;
        while (temp.next !== this.current) {
            temp = temp.next;
        }
        
        this.current = temp;
        console.log(this.current.url);
    }
    forward() {
        if (this.current === null || this.current.next === null) {
            console.log("Cannot go forward");
            return;
        }
        this.current = this.current.next;
        console.log(this.current.url);
    }
    currentPage() {
        if (this.current) {
            console.log(this.current.url);
        } else {
            console.log("No page visited yet");
        }
    }
}
let history = new BrowserHistory();

history.visit("google.com");
history.visit("github.com");
history.visit("linkedin.com");
history.backward();                 // github.com
history.forward();              // linkedin.com
history.visit("stackoverflow.com");
history.currentPage();          // stackoverflow.com
