//OBTENCION DE VARIABLES
const flagsElements = document.getElementById("flags");
const flagsElement = document.getElementById("flags-b");
let textsChange = document.querySelectorAll("[data-section]")

//TRADUCCION MENU NORMAL//
flagsElements.addEventListener("click", (e) => {
  changeLanguage(e.target.parentElement.dataset.language)
});

const changeLanguage = async (language) => {
  localStorage.setItem('language', language);
  const loadJson = await fetch(`../language/${language}.json`);
  const texts = await loadJson.json();

  for (const textChange of textsChange) {
    const section = textChange.dataset.section;
    const value = textChange.dataset.value;

    textChange.innerHTML = texts[section][value];
  }
};

if(language = localStorage.getItem('language')) {
  changeLanguage(language)
}


//TRADUCCION MENU AMBURGUESA//
flagsElement.addEventListener("click", (e) => {
  changeLang(e.target.parentElement.dataset.language)
});


const changeLang = async (language) => {
  localStorage.setItem('language', language);
  const loadJson = await fetch(`../language/${language}.json`);
  const texts = await loadJson.json();

  for (const textChange of textsChange) {
    const section = textChange.dataset.section;
    const value = textChange.dataset.value;

    textChange.innerHTML = texts[section][value];
  }
};

if(language = localStorage.getItem('language')) {
  changeLanguage(language)
}







