const formLogin = document.querySelector('.login-form');

const onFormLoginSubmit = event => {
  event.preventDefault();
  const formData = {
    email: formLogin.elements.email.value.trim(),
    password: formLogin.elements.password.value.trim(),
  };

  if (formData.email.length === 0 || formData.password.length === 0) {
    console.log(alert(`All form fields must be filled in`));
    return;
  }

  console.log(formData);
  formLogin.reset();
};

formLogin.addEventListener('submit', onFormLoginSubmit);
