function countLetters(string) {
  let output = {};
  
  string.split('').forEach((element, index) => {
    if (output[element] == undefined ) {
      output[element] = {
        times: 0,
        positions: [index]
      };
    } else {
      output[element].times += 1;
      output[element].positions.push(index);
    }
  });

  return output;
}

console.log(countLetters('srinathchintapalli'));