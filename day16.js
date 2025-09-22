let txt = "forxxorfxdofr"
let pat = "for"

function anagramCount(txt, pat) {

    let sum = 0;
    let Pattern = pat.split('').sort().join('');
    for (let i = 0; i <= txt.length - pat.length; i++) {
        let sub = txt.slice(i, i + pat.length);
        let sortedSub = sub.split('').sort().join('');

        if (sortedSub === Pattern) {
            sum++;
        }
    }

    return sum;
}

console.log(anagramCount(txt, pat));