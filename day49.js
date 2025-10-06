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