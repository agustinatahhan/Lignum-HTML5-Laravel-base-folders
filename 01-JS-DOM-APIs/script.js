// Ejercicio 1

document.addEventListener("DOMContentLoaded", function () {
  const hiddenSection = document.getElementById("hidden-section");

  setTimeout(function () {
    hiddenSection.style.display = "block";
  }, 1000);
});

// Ejercicio 3

const btn = document.querySelector("#btn");
const encabezado = document.querySelector("h2");

btn.addEventListener("click", getData);

function getData() {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const json = JSON.parse(xhr.responseText);
        encabezado.textContent = json.value;
        encabezado.style.color = "";
      } else {
        console.error("Error al obtener datos: ", xhr.status, xhr.statusText);
        encabezado.style.color = "red";
      }
    }
  };

  xhr.open("GET", "https://api.chucknorris.io/jokes/random", true);
  xhr.send();
}
// Ejercicio 4

const searchInput = document.getElementById("searchInput");
const repoList = document.getElementById("repoList");

searchInput.addEventListener("input", searchRepositories);

function searchRepositories() {
  const searchTerm = searchInput.value.trim();

  if (searchTerm !== "") {
    getRepositories(searchTerm);
  } else {
    repoList.innerHTML = "";
  }
}

function getRepositories(searchTerm) {
  const apiUrl = `https://api.github.com/search/repositories?q=${searchTerm}`;

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        repoList.innerHTML = "";

        if (response.items && response.items.length > 0) {
          response.items.forEach((repo) => {
            const li = document.createElement("li");
            li.textContent = repo.full_name;
            repoList.appendChild(li);
          });
        } else {
          const li = document.createElement("li");
          li.textContent = "No se encontraron repositorios.";
          repoList.appendChild(li);
        }
      } else {
        console.error("Error al obtener datos: ", xhr.status, xhr.statusText);
      }
    }
  };

  xhr.open("GET", apiUrl, true);
  xhr.send();
}
