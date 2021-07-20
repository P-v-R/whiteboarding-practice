"use strict"
// function accepts an array , and value 
// true is value is in array false if not 
// array is sorted of prim values 

// -----TEST-----
// fn([1,2,3,4,5,6], 6) --->true
// fn([1,2,3,4,5,6], 9) --->false
// fn([10,100,500,1000], 0) --->false

// array is sorted so BST is solid option 
// start from middle and compare if middle is > or < and move accordingly 

function arrayIncludes(nums, targetVal){
  // check to find the middle index of the nums array 
  let middleIdx = nums.length - 1; 
  let currentIdx = middleIdx;

  if(nums[currentIdx] === targetVal){
    return true;
  }
  // check to see if middleIdx of nums >, <, = targetVal
  if(nums[currentIdx] > targetVal && currentIdx !== nums.length){
    currentIdx += 1;
  }
  if(nums[currentIdx] < targetVal && currentIdx !== 0){
    currentIdx -= 1;
  }
  return false;
}