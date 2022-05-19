import { getExistingFaves } from "./settings/utils/faveFunction.js";

const favorites = getExistingFaves();

const articleContainer = document.querySelector(".article-container");

favorites.forEach((favorite) => {
  articleContainer.innerHTML += `<div class="article">
                                        <h3>${favorite.title}</h3>
                                        <i class="fa fa-heart"></i>
                                    </div>`;
});
