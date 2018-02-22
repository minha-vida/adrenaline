var store = {
  words: ["fast", "light", "for publisher", "dfp ready", "easy to use"],
  currentWordIndex: 0,
  interval: null
}

const animate = () => {
  store.interal = setInterval(() => {
    if(store.words.length > store.currentWordIndex + 1) {
      store.currentWordIndex++;
    }
    else {
      store.currentWordIndex = 0;
    }
    changeUI();
  }, 2000);
}

const changeUI = () => {
  let word = store.words[store.currentWordIndex];
  let mainWord = document.querySelector(".main-word");

  mainWord.classList.add("-fade-transition");
  mainWord.classList.add("-bottom");

  var toTopTimeOut = setInterval(() => {
    mainWord.classList.remove("-bottom");
    mainWord.classList.add("-top");
    clearInterval(toTopTimeOut);
  }, 500);

  var toShowTop = setInterval(() => {
    mainWord.innerText = word;
    mainWord.classList.remove("-fade-transition");
    mainWord.classList.remove("-top");
    clearInterval(toShowTop);
  }, 1000);
}

export default animate;
