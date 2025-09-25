class Node {
  constructor(tweet) {
    this.tweet = tweet;
    this.prev = null;
    this.next = null;
  }
}
class TwitterFeed {
  constructor() {
    this.head = null; 
    this.tail = null; 
  }
  insertAtHead(tweet) {
    const newNode = new Node(tweet);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }
  deleteAtTail() {
    if (!this.tail) return;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
  }
  deleteAtIndex(index) {
    if (index < 0 || !this.head) return;
    let temp = this.head;
    let i = 0;
    while (temp && i < index) {
      temp = temp.next;
      i++;
    }
    if (!temp) return; 
    if (temp === this.head) {
      this.head = this.head.next;
      if (this.head) this.head.prev = null;
      else this.tail = null;
    } else if (temp === this.tail) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      temp.prev.next = temp.next;
      temp.next.prev = temp.prev;
    }
  }
  showForward() {
    let temp = this.head;
    let result = [];
    while (temp) {
      result.push(temp.tweet);
      temp = temp.next;
    }
    console.log(result.join(" → "));
  }
  showBackward() {
    let temp = this.tail;
    let result = [];
    while (temp) {
      result.push(temp.tweet);
      temp = temp.prev;
    }
    console.log(result.join(" → "));
  }
}
const feed = new TwitterFeed();

feed.insertAtHead("Hello");
feed.insertAtHead("DSA Day 40");
feed.insertAtHead("Linked Lists are fun!");
feed.showForward();   
feed.deleteAtIndex(1);
feed.showForward();   
// feed.deleteOldest();
feed.showForward();   
feed.showBackward();  