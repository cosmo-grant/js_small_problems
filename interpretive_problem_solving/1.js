/*
input
  number, total number of numSwitches
output
  array of numbers, numSwitches on after n rounds

Algorithm
  intialize empty array
  for each n from 1 to n
    push false onto array
  for each i from 1 to n
    for each j from i, 2i, 3i, ..., <=n
      toggle switch[j]
  extract the indices of the true items in the array
  return the array of indices
*/

function lightsOn(numSwitches) {
  let switches = [];
  for (let i = 1; i <= numSwitches; i++) {
    switches.push(false);
  }
  for (let i = 1; i <= numSwitches; i++) {
    toggleMultiples(i, switches);
  }

  let onLights = [];
  for (let i = 1; i <= numSwitches; i++) {
    if (switches[i - 1]) { onLights.push(i); }
  }
  return onLights;
}

function toggleMultiples(i, switches) {
  let len = switches.length;
  for (let j = i; j <= len; j += i) {
    switches[j - 1] = !switches[j - 1];
  }
}

console.log(lightsOn(5)); // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]