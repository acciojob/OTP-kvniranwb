const inputs = document.querySelectorAll(".code");

// focus first input on load
window.addEventListener("load", () => {
  inputs[0].focus();
});

inputs.forEach((input, index) => {

  input.addEventListener("input", () => {
    // allow only digits
    input.value = input.value.replace(/[^0-9]/g, "");

    // move forward
    if (input.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {

    if (e.key === "Backspace") {

      if (input.value === "") {
        if (index > 0) {
          inputs[index - 1].focus();
          inputs[index - 1].value = "";
        }
      }
    }
  });

});