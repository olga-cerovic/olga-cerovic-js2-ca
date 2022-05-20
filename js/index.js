import { getExistingFaves } from "./settings/utils/faveFunction.js";
import { baseUrl } from "./settings/api.js";
import displayMessage from "./settings/components/common/displayMessage.js";
import { createMenu } from "./settings/components/common/createMenu.js";

const articlesURL = baseUrl + "articles";

createMenu();


(async function () {
  const articleContainer = document.querySelector(".article-container");

  ////////////////////////////////////////////////////

  // const search = document.querySelector(".search");

  // let articlesToRender = articles;

  // search.onkeyup = function (event) {
  //   // console.log(event);

  //   const searchValue = event.target.value.trim().toLowerCase();

  //   const filteredArticles = articles.filter(function (article) {
  //     if (article.title.toLowerCase().startsWith(searchValue)) {
  //       return true;
  //     }
  //   });

  //   console.log(filteredArticles);
  // };

  //////////////////////////////////////////////

  const favorites = getExistingFaves();

  try {
    const response = await fetch(articlesURL);
    const json = await response.json();

    articleContainer.innerHTML = "";

    json.forEach(function (article) {
      let cssClass = "far";

      const doesObjectExist = favorites.find(function (fave) {
        console.log(fave);

        return parseInt(fave.id) === article.id;
      });

      if (doesObjectExist) {
        cssClass = "fa";
      }

      articleContainer.innerHTML += `<div class="article">
                                            <h3>${article.title}</h3>
                                            <p>${article.author}</p>
                                            <p>${article.summary}</p>
                                            <i class="${cssClass} fa-heart" data-id="${article.id}" data-title="${article.title}"></i>
                                        </div>`;
    });
  } catch (error) {
    // console.log(error);
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

  function saveFaves(faves) {
    localStorage.setItem("favorites", JSON.stringify(faves));
  }
})();

