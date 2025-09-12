
const numbers = [42, 17, 8, 99, 23, 4, 76, 55];


document.getElementById('arrayDisplay').textContent = `Array: [${numbers.join(', ')}]`;


const maxValue = Math.max(...numbers);
const maxIndex = numbers.indexOf(maxValue);


const minValue = Math.min(...numbers);
const minIndex = numbers.indexOf(minValue);


document.getElementById('result').innerHTML = `
  Maximum Value: ${maxValue} (at index ${maxIndex})<br>
  Minimum Value: ${minValue} (at index ${minIndex})
`;
