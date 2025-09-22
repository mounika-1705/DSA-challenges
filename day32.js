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
