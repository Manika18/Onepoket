let arrayNum = [4, 8, 7, 13, 12, 6];

function sumArray(data) {
  const sumNum = data.reduce((a, b) => a + b);
  console.log('The sum of all the numbers is: ',sumNum);
  return sumNum;
}

sumArray(arrayNum);
