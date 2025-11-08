// 🚀 Day 40 - DSA Challenge

// Hey Students 

// Welcome to Day 40 of your DSA journey!

// 💡 Today’s Challenge - Design Twitter Feed 

// You are asked to design a simplified version of a Twitter feed system, where tweets are stored in a Doubly Linked List.

// 👉 Requirements:
// 1. Post Tweet (Insert at Head) → Every new tweet appears at the top of the feed.
// 2. Delete Oldest Tweet (Delete at Tail) → Remove the last tweet when feed gets too long.
// 3. Delete Tweet at Index → Delete a tweet at a given position (0-based).
// 4. Show Feed Forward → Print tweets from newest to oldest.
// 5. Show Feed Backward → Print tweets from oldest to newest.

// ⚡ Input Example
// PostTweet "Hello"  
// PostTweet "DSA Day 40"  
// PostTweet "Linked Lists are fun!"  
// ShowFeedForward  
// DeleteAtIndex 1  
// ShowFeedForward  
// DeleteOldest  
// ShowFeedForward  
// ShowFeedBackward  

// ✅ Expected Output

// Linked Lists are fun! → DSA Day 40 → Hello  
// Linked Lists are fun! → Hello  
// Linked Lists are fun! → Hello  
// Hello → Linked Lists are fun!  

// 💡 Hints:
// * Use DLL to allow quick insertion at head (new tweets on top).
// * Use DLL tail to delete the oldest tweet efficiently.
// * Carefully handle edge cases when deleting head, tail, or invalid positions.


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