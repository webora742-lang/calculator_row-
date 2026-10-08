const display_area = document.querySelector(".display_area");
const container = document.querySelector(".container");

function clear() {
  display_area.textContent = "";
}

function deleteLast() {
  const content = display_area.textContent;
  display_area.textContent = content.substring(0, content.length - 1);
}

function add(value) {
  display_area.textContent += value;
}

function calculate() {
  try {
    const calculation = display_area.textContent;
    display_area.textContent = math.evaluate(calculation);
  } catch {
    display_area.textContent = "Error";
  }
}

container.addEventListener("click", function (e) {
  if (e.target.nodeName === "BUTTON") {
    const buttonText = e.target.textContent;

    if (buttonText === "c") {
      clear();
    } else if (buttonText === "DEL") {
      deleteLast();
    } else if (buttonText === "=") {
      calculate();
    } else {
      add(buttonText);
    }
  }
});
