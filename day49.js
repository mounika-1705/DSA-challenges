// 🚀 Day 49 - DSA Challenge

// Hey Students 

// Welcome to Day 49 of your DSA journey!

// 💡 Today’s Challenge - Carousel Ad Rotation System 

// Imagine you are designing an ad rotation system for a website. Ads are displayed in a loop (after the last ad, the cycle returns to the first). We’ll use a Circular Linked List to manage this.

// 👉 Requirements:
// 1. addAd(adName) → Insert a new ad at the end of the circular list.
// 2. removeAd(adName) → Delete the first occurrence of the ad.
// 3. showAds() → Traverse the list once and display all ads in rotation order.
// 4. rotateAndShow(k) → Starting from the head ad, rotate k times and show which ad is currently being displayed.

// ⚡ Input Example

// addAd("Nike")  
// addAd("Adidas")  
// addAd("Puma")  
// addAd("Reebok")  
// showAds()  
// rotateAndShow(5)  
// removeAd("Puma")  
// showAds()  
// rotateAndShow(3)  


// ✅ Expected Output

// Nike -> Adidas -> Puma -> Reebok  
// Current Ad: Adidas  
// Nike -> Adidas -> Reebok  
// Current Ad: Reebok



class Node {
  constructor(name) {
    this.name = name;
    this.next = null;
  }
}

class Carousel {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addAd(name) {
    const newNode = new Node(name);
    if (!this.head) {
      this.head = this.tail = newNode;
      newNode.next = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    }
  }

  removeAd(name) {
    if (!this.head) return;

    let curr = this.head;
    let prev = this.tail;
    do {
      if (curr.name === name) {
        if (curr === this.head) this.head = curr.next;
        if (curr === this.tail) this.tail = prev;
        prev.next = curr.next;
        if (this.head === this.tail && this.head.name === name) {
          this.head = this.tail = null;
        }
        return;
      }
      prev = curr;
      curr = curr.next;
    } while (curr !== this.head);
  }

  showAds() {
    if (!this.head) return "No ads available";
    let result = [];
    let temp = this.head;
    do {
      result.push(temp.name);
      temp = temp.next;
    } while (temp !== this.head);
    return result.join(" -> ");
  }

  rotateAndShow(k) {
    if (!this.head) return "No ads available";

    let temp = this.head;
    for (let i = 1; i < k; i++) {   
      temp = temp.next;
    }
    return `Current Ad: ${temp.next.name}`; 
  }
}

const ads = new Carousel();
ads.addAd("Nike");
ads.addAd("Adidas");
ads.addAd("Puma");
ads.addAd("Reebok");
console.log(ads.showAds());         
console.log(ads.rotateAndShow(5));  
ads.removeAd("Puma");
console.log(ads.showAds());         
console.log(ads.rotateAndShow(3));  