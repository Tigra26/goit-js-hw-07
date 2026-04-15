const refs = {
  bodyElColor: document.querySelector('body'),
  spanDescription: document.querySelector('.color'),
  colorBtnChange: document.querySelector('.change-color'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const onColorBtnChange = () => {
  const randomHexColor = getRandomHexColor();

  refs.bodyElColor.style.backgroundColor = randomHexColor;
  refs.spanDescription.textContent = randomHexColor;
};

refs.colorBtnChange.addEventListener('click', onColorBtnChange);
