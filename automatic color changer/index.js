//first generate random color
const randomColor = function () {
    let hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  let intervalId
  const startChanging = function () {
    if(!intervalId)
     intervalId = setInterval(changebg, 1000);
  
    function changebg() {
      document.body.style.backgroundColor = randomColor();
    }
  };
  const stopChanging = function () {
    clearInterval(intervalId);
    intervalId = null
  };
  document.querySelector('#start').addEventListener('click', startChanging);
  document.querySelector('#stop').addEventListener('click', stopChanging);
  