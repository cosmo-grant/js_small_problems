function multiplyAllPairs(arr1, arr2) {
  let crossProduct = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      crossProduct.push(arr1[i] * arr2[j]);
    }
  }
  return crossProduct.sort((a, b) => a - b)
}

// should have used forEach method

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]