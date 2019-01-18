// Code your solution in this file!
const startingPoint = 42;
const feetInBlock = 264;
// 43 -> 1 
// 50 -> 8 
// 34 -> 8
function distanceFromHqInBlocks(block) {
  if (block < startingPoint) {
    return startingPoint - block;
  } else {
    return block - startingPoint;
  }
}

function distanceFromHqInFeet(block) {
  if (block < startingPoint) {
    return (startingPoint - block) * feetInBlock;
  } else {
    return (block - startingPoint) * feetInBlock;
  }
}