// Code your solution in this file!
const startingPoint = 42
// 43 -> 1 
// 50 -> 8 
// 34 -> 8
function distanceFromHqInBlocks(block) {
  return block - startingPoint
  if (block < startingPoint) {
    return startingPoint - block
  }
}