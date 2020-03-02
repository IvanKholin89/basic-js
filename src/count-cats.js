module.exports = function countCats(matrix) {
  if (!matrix && !matrix.length) {
    return 0;
  }
  var foundCats = 0;
  for (let i in matrix) {
    for (let j of matrix[i])
      if (j === "^^") {
        foundCats++;
      }
  }
  return foundCats;
};
