function addThousandSeparator(number) {
  const parts = number.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return parts.join('.');
}

const input = -7855948.9527;
const output = addThousandSeparator(input);
console.log(output);
// Output: -7,855,948.9527
