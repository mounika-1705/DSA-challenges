// 🚀 Day 16 - DSA Challenge is LIVE!
// Hey champs! 🔥
// Let’s level up our Sliding Window skills with a new twist. No sum this time it’s all about counting! 🧠💪
// 👉 Solve this using only the Brute Force Approach for now no optimized logic yet.

// 🧩 Challenge: Count Occurrences of Anagrams
// Given a string txt and a pattern string pat, your task is to count how many times an anagram of pat appears in txt as a substring.

// 📌 Example:
// Input: txt = "forxxorfxdofr", pat = "for"
// Output: 3
// Explanation: Anagrams of "for" => "for", "orf", "rfo", etc.


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