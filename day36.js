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