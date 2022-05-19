import { baseUrl } from "./settings/api.js";
import displayMessage from "./settings/components/common/displayMessage.js";

const articlesURL = baseUrl + "articles";

(async function () {
  const articleContainer = document.querySelector(".article-container");

  try {
    const response = await fetch(articlesURL);
    const json = await response.json();

    articleContainer.innerHTML = "";


    json.forEach(function (article) {
      articleContainer.innerHTML += `<div class="article">
                                            <h3>${article.title}</h3>
                                            <p>${article.author}</p>
                                            <p>${article.summary}</p>
                                            <i class="far fa-heart" data-id="${article.id}" data-title="${article.title}"></i>
                                        </div>`;
    });
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".article-container");
  }

  const faveButtons = document.querySelectorAll(".article i");

  faveButtons.forEach((button) => {
    button.addEventListener("click", handleClick);
  });

  function handleClick(event) {
    event.target.classList.toggle("fa");
    event.target.classList.toggle("far");

    const id = event.target.dataset.id;
    const title = event.target.dataset.title;


    const currentFaves = getExistingFaves();

    const articleExists = currentFaves.find(function (fave) {
      return fave.id === id;
    });

    if (articleExists === undefined) {
      const article = { id: id, title: title };

      currentFaves.push(article);

      saveFaves(currentFaves);
    } else {
      const newFaves = currentFaves.filter((fave) => fave.id !== id);
      saveFaves(newFaves);
    }

  }

  function getExistingFaves() {
    const faves = localStorage.getItem("favorites");

    if (faves === null) {
      return [];
    } else {
      return JSON.parse(faves);
    }
  }

  function saveFaves(faves) {
    localStorage.setItem("favorites", JSON.stringify(faves));
  }
})();
