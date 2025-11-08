// 🚀 Day 44 - DSA Challenge

// Hey Students

// 💡 Today’s Challenge  Music Playlist (Circular Linked List) 

// 👉 Requirements:
// 1. Add Song at End → Insert a new song into the playlist (end of list).
// 2. Add Song at Beginning → Insert a new song at the start of the playlist.
// 3. Show Playlist → Traverse once and print all songs in the playlist order.
// 4. Play Songs in Loop → Traverse circularly and print the first k songs being played in order.

// ⚡ Input Example

// AddSong "Shape of You" at end  
// AddSong "Believer" at end  
// AddSong "Senorita" at beginning  
// ShowPlaylist  
// PlaySongs k=5


// ✅ Expected Output

// Senorita -> Shape of You -> Believer  
// Playing: Senorita  
// Playing: Shape of You  
// Playing: Believer  
// Playing: Senorita  
// Playing: Shape of You


// 🔎 Hints

// 1. Remember: in circular linked list, last node points  back to head.

// 2. Be careful with traversal → stop after one round for ShowPlaylist, but continue for k iterations when simulating playback.

// 3. Handle the empty playlist case properly.



class Song {
  constructor(name) {
    this.name = name;
    this.next = null;
  }
}

class MusicPlaylist {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addSongAtEnd(name) {
    let newSong = new Song(name);
    if (!this.head) {
      this.head = this.tail = newSong;
      newSong.next = this.head;
      return;
    }

    this.tail.next = newSong;
    this.tail = newSong;
    this.tail.next = this.head;
  }

  addSongAtBeginning(name) {
    let newSong = new Song(name);
    if (!this.head) {
      this.head = this.tail = newSong;
      newSong.next = this.head;
      return;
    }
    newSong.next = this.head;
    this.head = newSong;
    this.tail.next = this.head;
  }

  showPlaylist() {
    if (!this.head) {
      console.log("Playlist is empty");
      return;
    }
    
    let result = [];
    let current = this.head;
    do {
      result.push(current.name);
      current = current.next;
    } while (current !== this.head);
    console.log(result.join(" -> "));
  }

  playSongs(k) {
    if (!this.head) {
      console.log("Playlist is empty");
      return;
    }
    let current = this.head;
    for (let i = 0; i < k; i++) {
      console.log("Playing: " + current.name);
      current = current.next;
    }
  }
}

let playlist = new MusicPlaylist();
playlist.addSongAtEnd("Shape of You");
playlist.addSongAtEnd("Believer");
playlist.addSongAtBeginning("Senorita");
playlist.showPlaylist();
playlist.playSongs(5);
