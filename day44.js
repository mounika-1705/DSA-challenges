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
