function buyFruit(itemsAndQuantities) {
  let itemsOnly = [];
  itemsAndQuantities.forEach(
    ([item, quantity]) => itemsOnly = itemsOnly.concat(repeatItem(item, quantity))
  );
  return itemsOnly;
}

function repeatItem(item, quantity) {
  let arr = [];
  for (let i = 0; i < quantity; i++) {
    arr.push(item)
  }
  return arr;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));