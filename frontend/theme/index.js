// helper para aplicar tema
const applyTheme = (theme) => {
  if (theme) {
    document.documentElement.setAttribute("data-theme", theme);
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
};

// inicialización
const initTheme = () => {
  const saved = localStorage.getItem("theme");

  if (saved) {
    applyTheme(saved); // modo manual
  } else {
    applyTheme(null); // modo sistema (NO seteamos data-theme)
  }
};

initTheme();

// botones
document.getElementById("btn-dark").addEventListener("click", () => {
  localStorage.setItem("theme", "dark");
  applyTheme("dark");
});

document.getElementById("btn-light").addEventListener("click", () => {
  localStorage.setItem("theme", "light");
  applyTheme("light");
});

// opcional: botón para volver al sistema
const btnSystem = document.getElementById("btn-system");

if (btnSystem) {
  btnSystem.addEventListener("click", () => {
    localStorage.removeItem("theme");
    applyTheme(null);
  });
}

// escuchar cambios del sistema SOLO si estás en modo auto
const media = window.matchMedia("(prefers-color-scheme: dark)");

media.addEventListener("change", () => {
  if (!localStorage.getItem("theme")) {
    applyTheme(null);
  }
});