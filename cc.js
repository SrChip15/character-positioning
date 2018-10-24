class Character {
  constructor(position) {
    this.times = 1;
    this.positions = [position];
  }
  add(position) {
    this.times += 1;
    this.position.push(position);
  }
}

function countLetters(string) {
  let output = {};

  string.split('').forEach((element, index) => {
    if (output[element] == undefined) {
      output[element] = {
       times: 1,
       positions: [index]
      };

    } else {
      output[element].times += 1;
      output[element].positions.push(index);
    }
    
    // output[element] = output[element] == undefined ? 1 : output[element] + 1;
  });

  return output;
}

console.log(countLetters('srinathchintapalli'));