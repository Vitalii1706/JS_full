const baseUrl =
  "https://61c732c3903185001754733f.mockapi.io/api/v1/create_users";

const submBtnElem = document.querySelector(".submit-button");
const formElem = document.querySelector(".login-form");

const validation = () => {
  const isValide = formElem.reportValidity();
  submBtnElem.disabled = !isValide;
  return submBtnElem.disabled;
};

function addNewUser(user) {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(user),
  });
}

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
      submBtnElem.disabled = true;
    })
    .catch(() => {
      submBtnElem.disabled = true;
    });
}

formElem.addEventListener("submit", onFormSubmit);
formElem.addEventListener("click", validation);
