class Node {
    constructor(photo) {
        this.photo = photo;
        this.prev = null;
        this.next = null;
    }
}
class Gallery {
    constructor() {
        this.head = null;
        this.tail = null; 
    }
    addPhotoAtEnd(photo) {
        let newNode = new Node(photo);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }
    addPhotoAtBeginning(photo) {
        let newNode = new Node(photo);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }
    viewForward() {
        let temp = this.head;
        let photos = [];
        while (temp) {
            photos.push(temp.photo);
            temp = temp.next;
        }
        console.log("Forward: " + photos.join(" → "));
    }
    viewBackward() {
        let temp = this.tail;
        let photos = [];
        while (temp) {
            photos.push(temp.photo);
            temp = temp.prev;
        }
        console.log("Backward: " + photos.join(" → "));
    }
}
let gallery = new Gallery();
gallery.addPhotoAtEnd("P1");
gallery.addPhotoAtEnd("P2");
gallery.addPhotoAtBeginning("P0");
gallery.viewForward();  
gallery.viewBackward(); 