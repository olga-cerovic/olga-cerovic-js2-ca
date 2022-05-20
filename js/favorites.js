import { getExistingFaves } from "./settings/utils/faveFunction.js";
import clearButton from "./settings/utils/clearButton.js";
import { createMenu } from "./settings/components/common/createMenu.js";

export const favorites = getExistingFaves();

createMenu();
clearButton();

const articleContainer = document.querySelector(".article-container");

if (favorites.length === 0) {
  articleContainer.innerHTML = "There are currently no favorites to display.";
}

favorites.forEach((favorite) => {
  articleContainer.innerHTML += `<div class="article-outer-container">
                                        <h3>${favorite.title}</h3>
                                        <i class="fa fa-heart"></i>
                                    </div>`;
});
