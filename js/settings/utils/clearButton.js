import { getExistingFaves } from "../utils/faveFunction.js";
import { favorites } from "../../favorites.js";

export default function clearButton() {
  const clearButton = document.querySelector("#clear");

  const articleContainer = document.querySelector(".article-container");

  clearButton.addEventListener("click", clearLocalStorage);

  function clearLocalStorage() {
    localStorage.clear();

    articleContainer.innerHTML = "Favorites removed";
  }
}
