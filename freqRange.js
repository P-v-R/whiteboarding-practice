function countSignals(frequencies, filterRanges) {
  // Write your code here
  // get acceptable range 
  let finalRange = [0,Infinity]
  for (let range of filterRanges) {
      if (range[0] > finalRange[0]) {
          finalRange[0] = range[0];
      }
      if (range[1] < finalRange[1]) {
          finalRange[1] = range[1];
      }
  }
  
  let numbersInRange = [];
  for (let number of frequencies){
      if (number > finalRange[0] && number < finalRange[1]) {
          numbersInRange.push(number)
      }
  }
  console.log(numbersInRange, finalRange);
  return numbersInRange.length;
  
}
countSignals([20,5,6,7,12,13,14], [[10,20], [5,15], [5,30]])