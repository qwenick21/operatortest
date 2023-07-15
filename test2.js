function findFirstLetter(arr) {
  let result = arr[0]; // 將第一個字母設定為結果初始值

  for (let i = 1; i < arr.length; i++) {
    // 使用字母順序比較
    if (arr[i] < result) {
      result = arr[i];
    }
  }

  return result;
}

const input = ['G', 'H', 'E', 'Z', 'Y'];
const output = findFirstLetter(input);
console.log(output); // Output: 'E'
