function showGreeting() {
      const nameInput = document.getElementById("name-input");
      const name = nameInput.value;
      const greetingText = `Hello ${name}!`;
      const greetingElement = document.getElementById("greeting");
      greetingElement.innerText = greetingText;
  }

  function addBox() {
      const container = document.getElementById("demo-app-container");
      const box = document.createElement("div");
      const nameLabel = document.createElement("label");
      nameLabel.innerText = "Your Name: ";
      const nameInput = document.createElement("input");
      nameInput.type = "text";
      nameInput.id = "name-input";
      nameInput.addEventListener("input", showGreeting);
      const greeting = document.createElement("p");
      greeting.id = "greeting";
      box.appendChild(nameLabel);
      box.appendChild(nameInput);
      box.appendChild(greeting);
      container.appendChild(box);
  }

  window.addEventListener("DOMContentLoaded", addBox);
