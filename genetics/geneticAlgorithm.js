var chromossome = [];
var population = [chromossome];

chromossome[0] = [1, 0, 1, 1, 1, 1, 0, 1];
chromossome[1] = [1, 1, 0, 1, 1, 0, 0, 0];
chromossome[2] = [0, 1, 1, 0, 0, 0, 1, 1];
chromossome[3] = [1, 1, 1, 0, 1, 1, 0, 0];
chromossome[4] = [1, 0, 1, 0, 1, 1, 1, 0];
chromossome[5] = [0, 1, 0, 0, 1, 0, 1, 1];
chromossome[6] = [0, 0, 1, 0, 0, 0, 1, 1];
chromossome[7] = [0, 0, 1, 1, 0, 1, 0, 1];

console.log("population.length: ", chromossome.length);

const parseArray = (chromossome) => {
  const binaryString = chromossome.join("");
  return parseInt(binaryString, 2);
};

chromossome.forEach(function (n) {
  const decimalValue = parseArray(chromossome);
  //   console.log(decimalValue);
  // console.log(parseArray(chromossome[n]));
  //   console.log(n);
});

const decimalPopulation = () => {
  for (let i = 0; i < chromossome.length; i++) {
    const element = chromossome[i];
    const decimalValue = parseArray(element);

    console.log(`chromossome[${i}]: `, decimalValue);
    const fx = Math.sin((decimalValue * Math.PI) / 256);
    console.log("fx: ", fx);
  }
};

console.log("Population converted to decimal: ");
decimalPopulation();
