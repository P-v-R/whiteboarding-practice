"use strict"
// fn(")(") --> false
// fn("(())") --> true
// fn("(()())") --> true  
// fn("(((())))") --> true
// fn("())(") --> false 

// if string === "" return true 
// leftCount - rightcount - idxPtr
// l and r need to end up being ===
// if at any point r > l return false 

function validParen(string) {

  let openCount = 0;
  let closeCount = 0;

  if (string.length === 0) return true;

  for (let idx = 0; idx < string.length; idx++) {
    
    if (closeCount > openCount) return false

    if (string[idx] === "(") {
      openCount++
    }
    else if (string[idx] === ")") {
      rightCount++
    }
  }
  
  if (closeCount === openCount) return true

}