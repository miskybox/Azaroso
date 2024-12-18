document.addEventListener("DOMContentLoaded", function () {
  const welcomePage = document.getElementById("welcome-page");
  const gamePage = document.getElementById("game-page");
  const startButton = document.getElementById("start-button");
  const buttonSound = document.getElementById("button-sound");
  const exitButton = document.getElementById("exit-button");
  const addUserButton = document.getElementById("add-user");
  const userList = document.getElementById("user-list");
  const userNameInput = document.getElementById("user-name");
  const resetButton = document.getElementById("reset-button");
  const cards = document.querySelectorAll(".card");
  const crystalSound = document.getElementById("crystal-sound");

  let players = [];

  function initGame() {
    addEventListeners();
    updateUI();
  }

  function addEventListeners() {
    startButton.addEventListener("click", () => {
      buttonSound.play();
      welcomePage.style.display = "none";
      gamePage.style.display = "block";
    });

    exitButton.addEventListener("click", () => {
      gamePage.style.display = "none";
      welcomePage.style.display = "flex";
    });

    addUserButton.addEventListener("click", addUser);

    resetButton.addEventListener("click", resetGame);

    // Delegación de eventos para botones dinámicos
    userList.addEventListener("click", (event) => {
      const target = event.target;
      const userElement = target.closest(".user-item");

      if (target.classList.contains("mystic-button")) {
        const randomCard = cards[Math.floor(Math.random() * cards.length)];
        crystalSound.play();
        flipCard(randomCard);
      } else if (target.textContent === "✏️") {
        editUser(userElement);
      } else if (target.textContent === "❌") {
        deleteUser(userElement);
      }
    });
  }

  function addUser() {
    const userName = validateUserName(userNameInput.value.trim());
    if (userName && players.length < 4) {
      players.push(userName);
      updateUI();
      userNameInput.value = "";
    } else if (!userName) {
      alert("Por favor, introduce un nombre válido.");
    } else {
      alert("Solo puedes agregar hasta 4 usuarios a la vez.");
    }
  }

  function validateUserName(name) {
    const allowedChars = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return name.match(allowedChars) ? name : null;
  }

  function updateUI() {
    userList.innerHTML = "";
    players.forEach((name) => {
      const userElement = document.createElement("div");
      userElement.classList.add("user-item");

      const userNameSpan = document.createElement("span");
      userNameSpan.textContent = name;
      userNameSpan.className = "user-name";

      const crystalButton = document.createElement("button");
      crystalButton.textContent = "🔮";
      crystalButton.className = "mystic-button";

      const editButton = document.createElement("button");
      editButton.textContent = "✏️";

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "❌";

      userElement.append(userNameSpan, editButton, crystalButton, deleteButton);
      userList.appendChild(userElement);
    });
  }

  function editUser(element) {
    const newName = prompt("Ingrese el nuevo nombre:");
    if (newName && validateUserName(newName)) {
      const index = players.indexOf(
        element.querySelector(".user-name").textContent
      );
      players[index] = newName;
      updateUI();
    } else {
      alert("Nombre inválido o ya existe.");
    }
  }

  function deleteUser(element) {
    const index = players.indexOf(
      element.querySelector(".user-name").textContent
    );
    if (index !== -1) {
      players.splice(index, 1);
      updateUI();
    }
  }

  function flipCard(card) {
    if (!card.classList.contains("flipped")) {
      card.classList.add("flipped");

      let messageElement = card.querySelector(".message");
      if (!messageElement) {
        messageElement = document.createElement("div");
        messageElement.className = "message";
        card.appendChild(messageElement);
      }

      const message = getRandomMessage();
      messageElement.textContent = message;
    }
  }

  function resetGame() {
    updateUI();
    cards.forEach((card) => {
      card.classList.remove("flipped");
      const messageElement = card.querySelector(".message");
      if (messageElement) {
        messageElement.remove();
      }
    });
  }

  function getRandomMessage() {
    const messages = [
      "¿Cómo es posible que no seas famosa teniendo ese talento? ¿Eh? ¡Explícamelo!",
      "¡No tengo tiempo para esto! Soy una mujer ocupada... pero venga, cuéntamelo todo.",
      "Yo soy una visionaria, pero a veces la gente no está preparada para mi visión.",
      "¿Un Gin-Tonic? ¡Eso lo cura todo! Hasta un mal casting.",
      "El ‘show business’ es duro, cariño, pero más dura soy yo.",
      "Si crees en ti misma, puedes comerte el mundo... y si no, pues me llamas y te ayudo.",
      "El talento está sobrevalorado. Lo importante es la actitud.",
      "Cariño, en esta vida no hay papeles pequeños, solo actrices que no saben brillar.",
      "Un poquito de Spanx, maquillaje y, hala, ¡lista para arrasar!",
      "¿Drama? Drama es quedarte sin cobertura en pleno casting.",
      "Tengo más contactos que una centralita, ¡confía en mí!",
      "¡Este es tu año! Bueno, eso digo todos los años, pero este lo siento de verdad.",
      "Tienes que aprender a decir que no. Pero di que sí a todo lo que te propongan, ¿vale?",
      "En esta vida hay que ser como un camaleón: adaptarse o morir.",
      "Yo no soy representante, soy una madre para mis artistas.",
      "¡Qué disgusto, hija! Pero bueno, que no se note... sonrisa y  seguir.",
      "Cariño, la fama es una montaña rusa. Un día estás arriba, y al siguiente en mi oficina llorando.",
      "Una estrella no se hace, se nace. Y tú naciste para brillar... aunque ahora estés un poco apagada.",
      "Que si tienes que llorar, lloras, pero no se te corra el rímel, ¿vale?",
      "Al final, lo importante no es ganar. Bueno, sí, es ganar, pero con estilo.",
      "¡Es que me parece fortísimo!",
      "Soy representante, pero ante todo soy una amiga.",
      "A mí no me llames pesada, llámame insistente, que suena mejor.",
      "¿Sabes lo que es una actriz todoterreno? Pues eso es lo que tú tienes que ser, cariño.",
      "En esta vida no se trata de tener éxito, sino de parecer que lo tienes.",
      "Me voy a tomar un Gin-Tonic, porque ya sabes que con uno todo se ve más claro.",
      "No hay casting pequeño, cariño. Si te lo crees, te lo comes.",
      "La fama sube como la espuma... y a veces se va por el desagüe.",
      "En esta oficina no somos muchas, pero somos apañadas.",
      "¿Que tienes miedo? Pues te lo tragas, sonríes y sigues para adelante.",
      "Me quedo loca con la mediocridad de esta industria, hija.",
      "Cariño, tú eres como un diamante en bruto... aunque ahora estés un poco más en bruto que en diamante.",
      "El mundo no está preparado para una estrella como tú. Pero yo sí, así que confía.",
      "Lo importante no es caer, lo importante es saber levantarse... y hacerlo con estilo.",
      "El talento está sobrevalorado; lo que importa es saber moverte.",
      "¿Sabes lo que necesita esta industria? Más gente como yo.",
      "No se puede ser buena todo el rato, cariño. A veces hay que ser zorra.",
      "En el fondo, la vida es un casting constante, y yo siempre voy preparada.",
      "Yo soy como el Ave Fénix: me hundo, me quemo y luego resurjo divina.",
      "Si la vida te da limones, pides tequila y los exprimes.",
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  }

  initGame();
});
