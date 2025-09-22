let pages = ["home", "about", "products", "home", "cart", "checkout"];
let k = 3;

function unique(pages, k) {
    let window = new Set();
    let start = 0;
    for (let end = 0; end < pages.length; end++) {
        while (window.has(pages[end])) {
            window.delete(pages[start]);
            start++;
        }
        window.add(pages[end]);

        if (end - start + 1 === k && window.size === k) {
            return true;
        }
    }
    return false;
}
console.log(unique(pages, k)); 