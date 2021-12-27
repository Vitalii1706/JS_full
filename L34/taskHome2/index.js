const baseUrl =
  "https://61c732c3903185001754733f.mockapi.io/api/v1/create_users";

const submitBtnElem = document.querySelector(".submit-button");
const formElem = document.querySelector(".login-form");

const validation = () => {
  const isValide = formElem.reportValidity();
  submitBtnElem.disabled = !isValide;
  return submitBtnElem.disabled;
};
const addNewUser = (user) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(user),
  });
};
function onFormSubmit(e) {
  e.preventDefault();
  const formData = [...new FormData(formElem)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value }),
    {}
  );
  addNewUser(formData)
    .then((response) => response.json())
    .then((user) => {
      alert(JSON.stringify(user));
      formElem.reset();
      submitBtnElem.disabled = true;
    });
}

formElem.addEventListener("submit", onFormSubmit);
formElem.addEventListener("input", validation);
