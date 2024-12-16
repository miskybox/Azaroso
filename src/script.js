// Elements
const welcomePage = document.getElementById("welcome-page");
const gamePage = document.getElementById("game-page");
const startButton = document.getElementById("start-button");
const exitButton = document.getElementById("exit-button");
const addUserButton = document.getElementById("add-user");
const userList = document.getElementById("user-list");
const userNameInput = document.getElementById("user-name");

// Event Listeners
startButton.addEventListener("click", () => {
  welcomePage.style.display = "none";
  gamePage.style.display = "block";
});

exitButton.addEventListener("click", () => {
  gamePage.style.display = "none";
  welcomePage.style.display = "flex";
});

addUserButton.addEventListener("click", () => {
  const userName = userNameInput.value.trim();
  if (userName) {
    addUserToList(userName);
    userNameInput.value = "";
  } else {
    alert("Por favor, introduce un nombre válido.");
  }
});

// Functions
function addUserToList(name) {
  if (userList.children.length < 3) {
    const userElement = document.createElement("div");
    userElement.classList.add("user");

    const userNameSpan = document.createElement("span");
    userNameSpan.textContent = name;

    const button = document.createElement("button");
    button.classList.add("mystic-button");
    button.textContent = "🔮";
    button.addEventListener("click", () => revealMessage(button));

    userElement.appendChild(userNameSpan);
    userElement.appendChild(button);
    userList.appendChild(userElement);
  } else {
    alert("Solo puedes agregar hasta 3 usuarios a la vez.");
  }
}

function revealMessage(button) {
  const messages = [
    "¡Grandes cosas vienen en camino!",
    "Tu destino está lleno de magia.",
    "Una sorpresa inesperada te espera.",
    "La fortuna sonríe para ti.",
  ];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  alert(randomMessage);
}

