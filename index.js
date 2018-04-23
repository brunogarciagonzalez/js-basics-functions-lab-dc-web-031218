// Code your solution in this file!
function distanceFromHqInBlocks(block_number){
  a = block_number - 42;
  return Math.abs(a);
}

function distanceFromHqInFeet(block_number) {
  return (distanceFromHqInBlocks(block_number) * 264);
}

function distanceTravelledInFeet(block1, block2) {
  a = Math.abs(block1 - block2);
  return a * 264;
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if ((distance > 400) && (distance < 2000)) {
    return 0.02 * (distance - 400);
  } else if ((distance > 2000) && (distance < 2500)) {
    return 25;
  } else if (distance > 2500) {
    return "cannot travel that far";
  }
}
