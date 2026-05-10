//your JS code here. If required.
const inputs = document.querySelectorAll(".code");

// focus first input on load
inputs[0].focus();

inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    const value = input.value;

    // allow only single digit
    input.value = value.replace(/[^0-9]/g, "");

    if (input.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (input.value === "" && index > 0) {
        inputs[index - 1].focus();
        inputs[index - 1].value = "";
      }
    }
  });
});