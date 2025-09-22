

let userA = [[9, 11], [13, 15], [18, 20]];
let userB = [[10, 12], [14, 16], [17, 18]];


function merge(userA, userB) {
  let mergeUsers = [...userA, ...userB];
  mergeUsers.sort((a, b) => a[0] - b[0]);


  let calresult = [];
  let [start, end] = mergeUsers[0];   


  for (let i = 1; i< mergeUsers.length; i++) {
    let [currentStart, currentEnd] = mergeUsers[i];

    if (currentStart <= end) {
      end = Math.max(end, currentEnd); 
    } else {
      calresult.push([start, end]);
      start = currentStart;
      end = currentEnd;
    }
  }

  calresult.push([start, end]);
  return calresult;
}

console.log(merge(userA, userB));
q