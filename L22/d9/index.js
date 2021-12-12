export const finishForm = () => {
  const inputPasword = document.querySelector('input[type = "text"]');
  inputPasword.type = 'password';
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'login';
  const form = document.querySelector('.login-form');
  form.prepend(input);
};
//finishForm();
//export { getTitleElement, getInputElement };
