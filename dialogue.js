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
        alert(`Перший рядок більше: ${row_1}`);
    }
    else if (row_1.toLowerCase() < row_2.toLowerCase()) {
      alert(`Другий рядок більше: ${row_2}`);
    } else {
      alert("Рядки рівні");
    }
}

function startMusicDialogue() {
  musicDialogue(); // Виклик функції з зовнішнього файлу
}
function Info() {
  studentInfo("Василенко", "Дмитро");
}

function rowCheck() {
  let row_1 = prompt("Введіть перший рядок:", "А");
  let row_2 = prompt("Введіть другий рядок:", "А");
  rowCheckFunc(row_1, row_2);
}

function changeColor() {
  document.body.style.backgroundColor = "lightblue";
  setTimeout(() => (document.body.style.background = ""), 30000);
}

function changeLocation() {
  location.href = "https://steamcommunity.com/id/flysoeasy/";
}

function listen_lxst() {
  location.href =
    "https://open.spotify.com/artist/4TS37lr3ZraUxBHS727sEp?si=-C88iVibTf22L1nG9BLWww";
}

function listen_dvrst() {
  location.href =
    "https://open.spotify.com/artist/0XFgyr4jwM0MGeZZW0VzA5?si=y2E44ZyRRSmj16IOOECCGQ";
}

function listen_bones() {
  location.href =
    "https://open.spotify.com/artist/5v2WhpA59TJSdPh7LCx1lN?si=1hJ3gE7cTUGlNBK6BeMU8w";
}

function FuncGetElement() {
  elem = document.getElementById("buttonColorChange");
  elem.style.backgroundColor = "rgb(197, 100, 61)";

  elements = document.querySelectorAll(".float-block");
  alert(`Кількість елементів з класом float-block: ${elements.length}`);
}

function outerInnerFunc() {
  element = document.querySelector(".positioned-block");
  console.log(element.outerHTML);

  button = document.getElementById("buttonOuterInner");
  button.innerHTML = "Використали";
}

function usingData() {
  var h1Element = document.getElementById("top_ch_h1");
  h1Element.firstChild.data = "Підібрали для тебе авторів цього тижня:";
}

function addNewPost() {
  document.open();
  document.write(
    `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4gB8KsrAQcmbokcfOIs5oF?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
  );
  document.close();
}

function create() {
  // Створюємо новий елемент div з класом "button_lxst"
  let newAuthorDiv = document.createElement("div");
  newAuthorDiv.className = "button_lxst";

  // Створюємо новий елемент img для аватара
  let newAuthorAvatar = document.createElement("img");
  newAuthorAvatar.src = "./img/new_author_avatar.jpg";
  newAuthorAvatar.alt = "new_author_avatar";

  // Створюємо новий елемент button для кнопки
  let newAuthorButton = document.createElement("button");
  newAuthorButton.onclick = function () {
    // Дія при кліку на кнопку
  };
  let buttonText = document.createTextNode("Слухати Lil Uzi Vert");
  newAuthorButton.append(buttonText);

  // Додаємо створені елементи в нового автора
  newAuthorDiv.append(newAuthorAvatar);
  newAuthorDiv.append(newAuthorButton);

  // Знаходимо елемент, до якого хочемо додати нового автора
  let authorsContainer = document.querySelector(".authors");

  // Видаляємо елемент з id "third_place"
  let thirdPlaceAuthor = document.getElementById("third_place");
  thirdPlaceAuthor.replaceWith(newAuthorDiv);
}

function remove() {
  let news = document.querySelectorAll(".float-block");
  let last_post = news[news.length - 1];
  last_post.remove();
}

function addNewPostCr() {
  let newsPosts = document.querySelectorAll(".float-block");
  let last_post = newsPosts[newsPosts.length - 1];

  let newPostDiv = document.createElement("div");
  newPostDiv.className = "float-block";

  let newPostText = document.createElement("p");
  let postText = document.createTextNode("Lil Uzi Vert зробив..");
  newPostText.append(postText);
  newPostDiv.append(newPostText);

  last_post.after(newPostDiv);
}

function mouseClickEvent() {
  let element = document.querySelector(".lxst_avatar img");
  element.style["boxShadow"] = "0 0 50px 0 #57e6ffb9";
}

buttonMouseClick2.onclick = function () {
  let element = document.querySelector(".lxst_avatar img");
  element.style["boxShadow"] = "0 0 50px 0 #ff57f19f";
};

document.getElementById("listen_lxst").addEventListener("click", function () {
  alert('Ви натиснули кнопку "Слухати LXST CXNTURY"');
});

document.getElementById("listen_dvrst").addEventListener("click", function () {
  alert('Ви натиснули кнопку "Слухати DVRST"');
});

document.getElementById("listen_bones").addEventListener("click", function () {
  alert('Ви натиснули кнопку "Слухати BONES"');
});

const buttonEventHandler = {
  handleEvent(event) {
    console.log("Button clicked on element:", event.currentTarget);
    event.currentTarget.removeEventListener("click", this);
  },
};

const buttons = document.querySelectorAll(".button_lxst button");

buttons.forEach((button) => {
  button.addEventListener("click", buttonEventHandler);
});


document.getElementById("musicList").onclick = function (event) {
  var listItems = document.querySelectorAll("#musicList li");
  listItems.forEach(function (item) {
    item.classList.remove("highlighted");
  });
  var target = event.target;
  if (target.tagName === "LI") {
    target.classList.add("highlighted");
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const menuButtons = document.querySelectorAll(".menu-btn");
  menuButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const action = btn.dataset.action;
      console.log("Виконується дія:", action);
    });
  });
});

document.addEventListener("click", function (event) {
    let id = event.target.dataset.time;
    if (!id) return;
    let elem = document.getElementById(id);
    elem.hidden = !elem.hidden;
  })
;
