// 🚀 Day 34 - DSA Challenge

// Hey Students 

// Welcome to Day 34 of your DSA journey!
// So far, you’ve managed browser history and task managers with linked lists. Today, let’s bring in something fun and practical a Music Playlist App powered by a Singly Linked List.

// 💡 Today’s Challenge - Music Playlist with Singly Linked List

// Imagine you’re building a Playlist Manager where each song is stored in a Singly Linked List.

// 👉 Requirements:
// 1.  Add Song at End → Insert a song at the end of the playlist.
// 2.  Add Song at Beginning → Insert a song at the start of the playlist.
// 3.  Delete Song by Name → Remove the first occurrence of a song by its name.
// 4.  Delete Song by Position → Remove a song at a given position (1-based index).
// 5.  Show Playlist → Print the current list of songs.

// ⚡ Input Example
// AddSong “Shape of You” at end  
// AddSong “Believer” at end  
// AddSong “Perfect” at beginning  
// DeleteSong “Believer”  
// DeleteSong at position 2  
// ShowPlaylist

// ✅ Expected Output
// Perfect → Shape of You → Believer  
// Perfect → Shape of You  
// Shape of You


// ⚡ Hint:
// 1. Handle edge cases like deleting from an empty playlist.
// 2. For deletion by position, carefully handle when position = 1 (deleting head).
// 3. Always update the head pointer correctly after insertions/deletions.



class Node {
    constructor(song) {
        this.song = song;
        this.next = null;
    }
}
class Playlist {
    constructor() {
        this.head = null;
    }
    addSongAtEnd(song) {
        let newNode = new Node(song);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }
        temp.next = newNode;
    }
    addSongAtBeginning(song) {
        let newNode = new Node(song);
        newNode.next = this.head;
        this.head = newNode;
    }
    deleteSongByName(song) {
        if (!this.head) return; 
        if (this.head.song === song) {
            this.head = this.head.next;
            return;
        }
        let temp = this.head;
        while (temp.next && temp.next.song !== song) {
            temp = temp.next;
        }
        if (temp.next) {
            temp.next = temp.next.next;
        }
    }
    deleteSongByPosition(position) {
        if (!this.head || position <= 0) return;
        if (position === 1) {
            this.head = this.head.next;
            return;
        }
        let temp = this.head;
        let count = 1;
        while (temp.next && count < position - 1) {
            temp = temp.next;
            count++;
        }
        if (temp.next) {
            temp.next = temp.next.next;
        }
    }
    showPlaylist() {
        if (!this.head) {
            console.log("Playlist is empty");
            return;
        }
        let songs = [];
        let temp = this.head;
        while (temp) {
            songs.push(temp.song);
            temp = temp.next;
        }
        console.log(songs.join(" → "));
    }
}
let songlist = new Playlist();
songlist.addSongAtEnd("Shape of You");
songlist.addSongAtEnd("Believer");
songlist.addSongAtBeginning("Perfect");
songlist.showPlaylist(); 
songlist.deleteSongByName("Believer");
songlist.showPlaylist(); 
songlist.deleteSongByPosition(1);
songlist.showPlaylist(); 