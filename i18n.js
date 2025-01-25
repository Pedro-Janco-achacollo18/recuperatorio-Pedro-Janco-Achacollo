document.addEventListener("DOMContentLoaded", () => {
    const languageSelector = document.getElementById("language-selector");
  
    // Cargar traducciones iniciales basadas en el idioma del navegador
    const userLang = navigator.language.startsWith("es") ? "es" : "en";
    loadTranslations(userLang);
  
    // Cambiar idioma dinámicamente al seleccionar un idioma
    languageSelector.addEventListener("change", (event) => {
      const selectedLang = event.target.value;
      loadTranslations(selectedLang);
    });
  
    function loadTranslations(lang) {
      fetch("formulario.json")
        .then((response) => response.json())
        .then((translations) => {
          const langData = translations[lang];
          for (const key in langData) {
            const element = document.getElementById(key);
            if (element) {
              element.textContent = langData[key];
            }
          }
        })
        .catch((error) => console.error("Error loading translations:", error));
    }
  });
  