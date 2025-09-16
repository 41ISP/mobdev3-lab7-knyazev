const buttons = document.querySelectorAll(".button");
const disp = document.querySelector(".display");
function handleButton(button) {
  const value = button.target.textContent; // Получаем текст кнопки (например, "5", "+")

  // Обработка разных типов кнопок
  if (value === '=') {
    if(disp.textContent.includes("%")){
      const numbers = disp.textContent.split("%")
      const res = (numbers[0] / 100) * numbers[1]
      disp.textContent = res
    } else{
      const input = disp.textContent
      disp.textContent = eval(disp.textContent.replaceAll("×", "*").replaceAll("−", "-").replaceAll("÷", "/"))
      disp.textContent = res
    }
}else if (value === "%"){
    disp.textContent = eval(disp.textContent.replaceAll("×", "*").replaceAll("−", "-").replaceAll("÷", "/")) + "%"
  }
  else if (value === 'AC') {
    disp.textContent = 0
  } else if (value === "+/-") {
    disp.textContent = disp.textContent.replaceAll("−", "-") * -1
  }
  else if (disp.textContent == "0") {
    disp.textContent = value
  } 
  else {
    disp.textContent += value
  }

}


// Для каждой кнопки добавляем обработчик клика
buttons.forEach(button => {
  button.addEventListener('click', handleButton);
});