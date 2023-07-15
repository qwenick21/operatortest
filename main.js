function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

function handleClick() {
  console.log('按鈕被點擊了！');
}

const myButton = document.getElementById('myButton');
const throttledHandleClick = throttle(handleClick, 2000);
myButton.addEventListener('click', throttledHandleClick);
