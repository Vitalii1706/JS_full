const finishForm = () => {
  const form = document.querySelector('.login-form');
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'login';
  form.prepend(input);
  const inputPasword = document.querySelector('input[type = "text"]');
  inputPasword.type = 'password';
};

export { finishForm };
