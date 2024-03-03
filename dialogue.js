function musicDialogue() {
  let response;

  response = prompt("Привіт! Що вас цікавить у світі музики сьогодні?");

  if (response !== null) {
    alert("Цікава тема! Давайте поринемо глибше.");
    while (response.toLowerCase() !== "кінець") {
      // Цикл для тривання діалогу до введення "кінець"
      response = prompt("Ще щось цікавить вас про музику?");
      if (response === null) {
        // Перевірка на вихід з діалогу
        break;
      } else if (response.toLowerCase() === "пісні") {
        alert(
          "Пісні - це завжди хороший розділ. Яка конкретно пісня вас цікавить?"
        );
      } else if (response.toLowerCase() === "виконавці") {
        alert(
          "Виконавці - без них музика була б пусткою. Чи шукаєте ви когось конкретного?"
        );
      } else {
        alert("Цікаво! Ще щось?");
      }
    }
  }
  alert("Дякую за діалог про музику! Чудового вам дня!");
}

function studentInfo(surname, name, jobtitle = "студент") {
    alert(`${surname + " " + name}, посада: ${jobtitle}`);
}

function rowCheckFunc(row_1, row_2) {
    if (row_1.toLowerCase() > row_2.toLowerCase()) {
        alert("Перший рядок більше");
    }
    else if (row_1.toLowerCase() < row_2.toLowerCase()) {
      alert("Другий рядок більше");
    } else {
      alert("Рядки рівні");
    }
}