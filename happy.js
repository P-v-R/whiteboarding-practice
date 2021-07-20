
// debts = [['Alex', 'Blake',  '3'], ['Blake', 'Alex', '3'], ['Casey', 'Alex', '7'],['Casey', 'Alex', '4'], ['Casey', 'Alex', '2']]


// Given the group debt records (array of array of borrower, lender, debt)
// Who in the group has the smallest negative balance
// ex: [[alex, blake, 2],[blake, alex, 2], [casey, alex, 5],[alex, blake, 4],[alex, casey, 4]]
// returns ["alex", "blake"] because they both have balance of -3, which is minimum
// amount all members

const debts = [
  ["alex", "blake", 2],
  ["blake", "alex", 2], 
  ["casey", "alex", 5],
  ["blake", "casey", 7],
  ["alex", "blake", 4],
  ["alex", "casey", 4]
]
const debts3 = [
  ["blake", "alex", 7], 
  ["blake", "alex", 3], 
  ["alex", "blake", 4],
  ["blake", "alex", 1], 
  ["alex", "blake", 7],

 

]

const debts2 = [
  ["a", "b", 1],
  ["b", "a", 2],

]

function ssmallestNegativeBalance(debts) {
  let nameToBalance = {};

  for(let i = 0; i < debts.length; i++) {
    if (!(debts[i][0] in nameToBalance)) {
      nameToBalance[debts[i][0]] = 0
    }
    if (!(debts[i][1] in nameToBalance)) {
      nameToBalance[debts[i][1]] = 0
    }
    nameToBalance[debts[i][0]] -= debts[i][2];
    nameToBalance[debts[i][1]] += debts[i][2];
  }

  let allBalances = Object.values(nameToBalance);
  let min = Math.min(...allBalances);
  console.log("min", min)
  let smallestBalance = [];

  if (min >= 0){
    console.log("Nobody has a negative balance");
    return "Nobody has a negative balance";
  } 

  for (record in nameToBalance) {
    console.log("----->", record)
    if(nameToBalance[record] == min) {
      smallestBalance.push(record);
    }
  }
  console.log("-->",smallestBalance);
  return smallestBalance;
}

function smallestNegativeBalance(debts) {
  let nameToBalance = {};
  
  for (let i = 0; i < debts.length; i++) {
      // if lender or borrower name not in nameToBalance, add it with value of 0
      if(!(debts[i][0] in nameToBalance)) {
          nameToBalance[debts[i][0]] = 0;
      }
      if(!(debts[i][1] in nameToBalance)) {
          nameToBalance[debts[i][1]] = 0;
      }
      nameToBalance[debts[i][0]] -= +debts[i][2];
      nameToBalance[debts[i][1]] += +debts[i][2];
  }
  // get a list of only balances owed 
  let allBalances = Object.values(nameToBalance);
  let minBalance = Math.min(...allBalances);
  
  // if the lowest balance is >= 0, return message 
  if (minBalance >= 0){
    console.log("nah")
    return "Nobody has a negative balance";
  } 
  
  let returnBalances = [];
  for(let record in nameToBalance){
      if(nameToBalance[record] === minBalance) {
          returnBalances.push(record);
      }
  }
  console.log("--->?", returnBalances)
  return returnBalances;
}

smallestNegativeBalance(debts)
// function smallestNegativeBalance(debts) {
//   let currentLowest = [];
//   let allBalances = {};
//   // calculate borrow debt
//   debts.map(person => {
//       allBalances[person[0]] = (allBalances[person[0]] - +person[2]);
//   })
//   // add lending ammount to each person to correct total debt
//   debts.map(person => {
//       allBalances[person[1]] = (allBalances[person[1]] + +person[2]);
//   })
  
//   // find absolute lowest balance, if > 0 return message
//   let [minBalance] = Object.entries(allBalances).sort(([ ,num1], [ ,num2]) => num1 - num2)
//   if (allBalances[minBalance] >= 0){
//       return "Nobody has a negative balance"
//   } else {
//       console.log(minBalance)
//       currentLowest.push(minBalance[0])
//   }
  
//   // check if anyone shares lowest balance and return result 
//   for (const[person,debt] of Object.entries(allBalances)) {
//     if (allBalances[person] === allBalances[currentLowest[0]]) {
//         currentLowest.push[person];
//         }
//     }
//     console.log("currr -->", currentLowest)
//   }
  
  
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

  let overThresh = numCalls.filter(num => num >= alertTreshold);

  for (let i = 0; i < precedingMinutes; i++){
    console.log("over i -->", overThresh[i])
    overThresh[i] = overThresh[i] - alertTreshold;
  }
  console.log("over thresh --> ",overThresh);
  console.log(overThresh.filter(num => num > 0).length);
  // console.log(overThresh.reduce((a, b) => a + b, 0));


  return overThresh.reduce((a, b) => a + b, 0);

  // console.log(overThresh)
  // numCalls.map(call => {
  //   if (call > precedingMinutes){
  //     callsOverThreshold += 1;
  //     // console.log("call =>", call)
  //   } 
  //   // console.log("====>", call)
  // });
  // // console.log("==>", callsOverThreshold)
  // // console.log(callsOverThreshold - alertTreshold)
  // return callsOverThreshold - alertTreshold;
}

// numOfAlerts(3, 10, [0,11,10,10,7]);

// numOfAlerts(3, 4, [2,2,2,2,5,5,5,8]);

