// 🚀 Day 36 - DSA Challenge

// Hey Students 

// Welcome to Day 36 of your DSA journey!
// Yesterday, you built a Photo Gallery using a Doubly Linked List. Today, let’s level up and design a more general-purpose data structure that you might actually face in coding interviews.

// 💡 Today’s Challenge - Design a Playlist Manager (DLL Insertions & Traversal) 

// You are asked to build a Playlist Manager where songs are stored in a Doubly Linked List. The system should allow insertion at different positions and viewing songs both ways.

// 👉 Requirements:
// 1. Add Song at Head → Insert a new song at the beginning.
// 2. Add Song at Tail → Insert a new song at the end.
// 3. Add Song at Index → Insert a song at a specific position (0-based index).
// 4. Show Playlist Forward → Print songs from head to tail.
// 5. Show Playlist Backward → Print songs from tail to head.

// ⚡ Input Example

// AddAtHead "SongA"  
// AddAtTail "SongB"  
// AddAtTail "SongC"  
// AddAtIndex 1 "SongX"  
// ShowForward  
// ShowBackward  


// ✅ Expected Output

// SongA → SongX → SongB → SongC  
// SongC → SongB → SongX → SongA  


// 💡 Hint:
// * Inserting at head
// * Inserting at tail
// * Inserting in the middle


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
    this.size = 0;
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
    this.size++;
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
    this.size++;
  }
  addAtIndex(index, song) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index");
      return;
    }

    if (index === 0) {
      this.addAtHead(song);
      return;
    }

    if (index === this.size) {
      this.addAtTail(song);
      return;
    }
    const newNode = new Node(song);
    let current = this.head;
    let i = 0;

    while (i < index - 1) {
      current = current.next;
      i++;
    }
    newNode.next = current.next;
    newNode.prev = current;
    current.next.prev = newNode;
    current.next = newNode;
    this.size++;
  }
  showForward() {
    let current = this.head;
    const songs = [];
    while (current) {
      songs.push(current.song);
      current = current.next;
    }
    console.log("Forward:", songs.join(" → "));
  }
  showBackward() {
    let current = this.tail;
    const songs = [];
    while (current) {
      songs.push(current.song);
      current = current.prev;
    }
    console.log("Backward:", songs.join(" → "));
  }
}
const playlist = new Playlist();
playlist.addAtHead("SongA");
playlist.addAtTail("SongB");
playlist.addAtTail("SongC");
playlist.addAtIndex(1, "SongX");
playlist.showForward();  
playlist.showBackward();