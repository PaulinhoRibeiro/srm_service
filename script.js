// script.js

document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.getElementById("theme-toggle");

  // Carregar o tema preferido do usuário, se existir
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    document.body.classList.toggle("dark-mode", currentTheme === "dark");
  }

  // Adicionar evento de clique no botão de alternância
  themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    // Salvar a preferência do usuário no localStorage
    const newTheme = document.body.classList.contains("dark-mode")
      ? "dark"
      : "light";
    localStorage.setItem("theme", newTheme);
  });
});
