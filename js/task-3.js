const refs = {
  inputName: document.querySelector('#name-input'),
  outputName: document.querySelector('#name-output'),
};

refs.inputName.addEventListener('input', event => {
  if (refs.inputName.value.trim() === '') {
    return (refs.outputName.textContent = 'Anonymous');
  }
  refs.outputName.textContent = event.currentTarget.value.trim();
});
