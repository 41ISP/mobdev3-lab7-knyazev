const buttons = document.querySelectorAll(".button");
const disp = document.querySelector(".display");
function handleButton(button) {
  const value = button.target.textContent; // Получаем текст кнопки (например, "5", "+")

  // Обработка разных типов кнопок
  if (value === '=') {
    const input = disp.textContent
    const res = eval(input.replaceAll("×", "*").replaceAll("−", "-").replaceAll("÷", "/"))
    disp.textContent = res
  } else if (value === 'AC') {
    disp.textContent = 0
  } else if (value === "+/-") {
    disp.textContent = disp.textContent.replaceAll("−", "-") * -1
  }
  else if (disp.textContent == "0") {
    disp.textContent = value
  } else {
    disp.textContent += value
  }

}


// Для каждой кнопки добавляем обработчик клика
buttons.forEach(button => {
  button.addEventListener('click', handleButton);
});