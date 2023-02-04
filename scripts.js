const createElements = () => {
  const root = document.createElement("div");
  const text = document.createElement("div");
  const containerNum = document.createElement("div");
  const load = document.createElement("div");

  return { root, text, containerNum, load };
};

const setAttribute = (root, text, containerNum, load) => {
  root.setAttribute("class", "root");
  text.setAttribute("class", "text");
  containerNum.setAttribute("class", "container-num");
  load.setAttribute("class", "load");
};

const startCounting = ({ width, load, text, interval }) => {
  let count = 0;
  let intervalId;

  const func = () => {
    if (count === width) {
      clearInterval(intervalId);
      return;
    }
    text.textContent = `${count}%`;
    load.style.width = `${count}%`;
    count++;
  };

  setInterval(func, interval);
};

const init = () => {
  const { root, text, containerNum, load } = createElements();
  setAttribute(root, text, containerNum, load);
  document.body.appendChild(root);
  root.appendChild(containerNum);
  containerNum.appendChild(load);
  root.appendChild(text);

  startCounting({ width: 76, text, load, interval: 20 });
};

init();
