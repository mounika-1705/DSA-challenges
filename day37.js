// 🚀 Day 37 - DSA Challenge

// Hey Students 

// Welcome to Day 37 of your DSA journey! 
// By now, you’ve mastered insertions and traversal in Doubly Linked Lists. Today, we take the next step and add deletions, which makes your data structure truly dynamic and complete.

// 💡 Today’s Challenge - Music Playlist Editor (DLL Insertions, Deletions & Traversal) 

// You are designing a Music Playlist App where songs are stored in a Doubly Linked List. Your system should support both insertion and deletion operations, while allowing traversal in both directions.

// 👉 Requirements:
// 1. Add Song at Head → Insert a new song at the beginning.
// 2. Add Song at Tail → Insert a new song at the end.
// 3. Add Song at Index → Insert a song at a specific position (0-based index).
// 4. Delete Song at Head → Remove the first song.
// 5. Delete Song at Tail → Remove the last song.
// 6. Delete Song at Index → Remove the song at a specific position.
// 7. Show Playlist Forward → Traverse from head to tail.
// 8. Show Playlist Backward → Traverse from tail to head.

// ⚡ Input Example

// AddAtHead "SongA"  
// AddAtTail "SongB"  
// AddAtTail "SongC"  
// AddAtIndex 1 "SongX"  
// ShowForward  
// DeleteAtIndex 2  
// ShowForward  
// ShowBackward  
// DeleteAtHead  
// DeleteAtTail  
// ShowForward

// ✅ Expected Output

// SongA → SongX → SongB → SongC  
// SongA → SongX → SongC  
// SongC → SongX → SongA  
// SongX → SongC  
// SongX

// 💡 Hint:

// Carefully update both prev and next pointers during deletions.

// Handle edge cases: deleting from an empty list, invalid index, or single-element list.


class Node {
  constructor(song) {
    this.song = song;
    this.prev = null;
    this.next = null;
  }
}

class Playlist {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addAtHead(song) {
    const newNode = new Node(song);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }
  addAtTail(song) {
    const newNode = new Node(song);
    if (!this.tail) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }
  addAtIndex(index, song) {
    if (index === 0) {
      this.addAtHead(song);
      return;
    }
    let current = this.head;
    let i = 0;
    while (current && i < index - 1) {
      current = current.next;
      i++;
    }
    if (!current) {
      console.log("Invalid index");
      return;
    }
    if (!current.next) {
      this.addAtTail(song);
      return;
    }
    const newNode = new Node(song);
    newNode.next = current.next;
    newNode.prev = current;
    current.next.prev = newNode;
    current.next = newNode;
}
  deleteAtHead() {
    if (!this.head) {
      console.log("Playlist is empty");
      return;
    }
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
  }
  deleteAtTail() {
    if (!this.tail) {
      console.log("Playlist is empty");
      return;
    }
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
  }
  deleteAtIndex(index) {
    if (!this.head) {
      console.log("Playlist is empty");
      return;
    }
    if (index === 0) {
      this.deleteAtHead();
      return;
    }
    let current = this.head;
    let i = 0;
    while (current && i < index) {
      current = current.next;
      i++;
    }
    if (!current) {
      console.log("Invalid index");
      return;
    }
    if (current === this.tail) {
      this.deleteAtTail();
      return;
    }
    current.prev.next = current.next;
    current.next.prev = current.prev;
  }
  showForward() {
    let current = this.head;
    const songs = [];
    while (current) {
      songs.push(current.song);
      current = current.next;
    }
    console.log( songs.join(" → "));
  }
  showBackward() {
    let current = this.tail;
    const songs = [];
    while (current) {
      songs.push(current.song);
      current = current.prev;
    }
    console.log(songs.join(" → "));
  }
}
const playlist = new Playlist();

playlist.addAtHead("SongA");
playlist.addAtTail("SongB");
playlist.addAtTail("SongC");
playlist.addAtIndex(1, "SongX");
playlist.showForward();      

playlist.deleteAtIndex(2);
playlist.showForward();      
playlist.showBackward();     

playlist.deleteAtHead();
playlist.deleteAtTail();
playlist.showForward();      