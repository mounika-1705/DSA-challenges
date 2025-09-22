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