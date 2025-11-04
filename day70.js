function Permutations(str, prefix = "") {
  if (str.length === 0) {
    console.log(prefix);
    return;
  }

  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    let next = str.slice(0, i) + str.slice(i + 1);
    Permutations(next, prefix + current);
  }
}

let S = "ABC";
Permutations(S);