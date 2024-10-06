const maxChickenProtect = (numberChicken, lengthOfRoof, positions) => {
  let start = 0;
  let maxCount = 0;

  for (let end = 0; end < numberChicken; end++) {
      // Move the start pointer until the current end chicken can be covered
      while (positions[end] >= positions[start] + lengthOfRoof) {
          start++;
      }

      maxCount = Math.max(maxCount, end - start + 1);
  }

  console.log(maxCount)
}

const inputs = [{
  numberChicken: 5,
  lengthOfRoof: 5,
  positions: [2, 5, 10, 12, 15]
}, {
  numberChicken: 6,
  lengthOfRoof: 10,
  positions: [1, 11, 30, 34, 35, 37]
}];
inputs.forEach((input) => {
  maxChickenProtect(input.numberChicken, input.lengthOfRoof, input.positions)
})
