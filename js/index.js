import { baseUrl } from "./settings/api.js";
import displayMessage from "./settings/components/common/displayMessage.js";

const articlesURL = baseUrl + "articles";

(async function () {
  const articleContainer = document.querySelector(".article-container");

  try {
    const response = await fetch(articlesURL);
    const json = await response.json();

    articleContainer.innerHTML = "";

    // throw "Fiona is to blame";

    json.forEach(function (article) {
      articleContainer.innerHTML += `<div class="article">
                                            <h3>${article.title}</h3>
                                            <p>${article.author}</p>
                                            <p>${article.summary}</p>
                                            <i class="far fa-heart"></i>
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
    console.log(event);
  }
})();
