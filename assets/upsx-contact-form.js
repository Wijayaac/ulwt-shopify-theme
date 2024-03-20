const initializeContactForm = () => {
  const forms = document.querySelectorAll(".upsx-cf-form");

  if (!forms[0]) {
    return;
  }

  const fields = Array.from(document.querySelectorAll(".upsx-cf-form [aria-required='true']"));
  if (!fields[0]) {
    return;
  }

  checkOnBlurFields(fields);
};

function checkOnBlurFields(fields) {
  fields.forEach((field) => {
    field.addEventListener("blur", () => {
      if (field.value === "") {
        field.parentNode.classList.add("error");
      } else {
        field.parentNode.classList.remove("error");
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initializeContactForm();
});
