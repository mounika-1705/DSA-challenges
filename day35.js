// 🚀 Day 35 - DSA Challenge

// Hey Students

// Welcome to Day 35 of your DSA journey!
// We’re stepping into Doubly Linked Lists, and today you’ll see how powerful they are for bi-directional navigation.

// 💡 Today’s Challenge - Photo Gallery Viewer (DLL Insertions & Traversal)

// Imagine you’re building a Photo Gallery App where each photo is linked to the previous and next photo. A Doubly Linked List is the perfect structure for this! 

// 👉 Requirements:
// 1. Add Photo at End → Insert a new photo into the gallery (at the end).
// 2. Add Photo at Beginning → Insert a new photo at the start.
// 3. View Gallery Forward → Traverse forward to display photos in order.
// 4. View Gallery Backward → Traverse backward to display photos in reverse order.

// ⚡ Input Example

// AddPhoto P1 at end  
// AddPhoto P2 at end  
// AddPhoto P0 at beginning  
// View Forward  
// View Backward


// ✅ Expected Output

// Forward: P0 → P1 → P2  
// Backward: P2 → P1 → P0

// ⚡ Hint:
// * Each photo node stores prev and next pointers.
// * Update both pointers properly during insertion.
// * Backward traversal is only possible because of DLL (not possible in SLL).



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