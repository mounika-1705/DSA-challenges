function subsets(S) {
  const result = [];

  function generate(current, index) {
    if (index === S.length) {
      result.push(current);
      return;
    }

    generate(current, index + 1);   //excluding the current character
    generate(current + S[index], index + 1);  //including current character
   
  }

  generate("", 0);
  return result;
}

const S = "abc";
console.log(subsets(S));