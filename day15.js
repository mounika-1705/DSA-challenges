let pages = ["home", "about" ,"products", "home", "cart", "checkout" ];
let k = 3;

function Detect(pages, k) {
    for(let i= 0; i<= pages.length -k; i++) {
        let sum = new Set();
        for(let j = i; j< i +k; j++) {
            if (sum.has(pages[j])) {
                break;
            }
            sum.add(pages[j]);
        }
        if (sum.size === k) {
            return true;
        }
    }
        return false;
}
console.log(Detect(pages, k));