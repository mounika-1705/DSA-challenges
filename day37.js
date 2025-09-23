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