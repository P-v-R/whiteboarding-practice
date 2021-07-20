
debts = [['Alex', 'Blake',  '3'], ['Blake', 'Alex', '3'], ['Casey', 'Alex', '7'],['Casey', 'Alex', '4'], ['Casey', 'Alex', '2']]

function smallestNegativeBalance(debts) {
  let currentLowest = [];
  let allBalances = {};
  // calculate borrow debt
  debts.map(person => {
      allBalances[person[0]] = (allBalances[person[0]] - +person[2]);
  })
  // add lending ammount to each person to correct total debt
  debts.map(person => {
      allBalances[person[1]] = (allBalances[person[1]] + +person[2]);
  })
  
  // find absolute lowest balance, if > 0 return message
  let [minBalance] = Object.entries(allBalances).sort(([ ,num1], [ ,num2]) => num1 - num2)
  if (allBalances[minBalance] >= 0){
      return "Nobody has a negative balance"
  } else {
      console.log(minBalance)
      currentLowest.push(minBalance[0])
  }
  
  // check if anyone shares lowest balance and return result 
  for (const[person,debt] of Object.entries(allBalances)) {
    if (allBalances[person] === allBalances[currentLowest[0]]) {
        currentLowest.push[person];
        }
    }
    console.log("currr -->", currentLowest)
  }
  
  
  // return the individual with the lowest balance 
  // let [minBalance] = Object.entries(allBalances).sort(([ ,num1], [ ,num2]) => num1 - num2)
  // return minBalance[0]



// smallestNegativeBalance(debts)

// console.log(debts.map(d => {
//   console.log(d)
//   console.log(+d[2])
// }))
// console.log("debts -->", debts[0][1])

// (3, 10, [0,11,10,10,7]) ---> 1

// precedingMinutes is ammount of acceptable minutes for call
// alertThreshold is how many ignored calls above pM
// numCalls = total calls 
function numOfAlerts(precedingMinutes, alertTreshold, numCalls){

  let callsOverThreshold = 0;
  numCalls.map(call => {
    if (call > precedingMinutes){
      callsOverThreshold += 1;
      console.log("call =>", call)
    } 
    // console.log("====>", call)
  });
  // console.log("==>", callsOverThreshold)
  console.log(callsOverThreshold - alertTreshold)
  return callsOverThreshold - alertTreshold;
}

numOfAlerts(3, 10, [0,11,10,10,7])
