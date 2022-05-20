import { getUserName } from "../../utils/storage.js";

export function createMenu() {
  const { pathname } = document.location;

  const menuContainer = document.querySelector(".menu-container");

  const username = getUserName();

//   let authLink =

  menuContainer.innerHTML = `<div class="menu">
                                <a href="/" class="${[
                                  pathname === "/" ? "active" : "",
                                ]}">Home</a>
                                <a href="favorites.html" class="${[
                                  pathname === "/favorites.html"
                                    ? "active"
                                    : "",
                                ]}">Favorites</a>
                                <a href="login.html" class="${[
                                  pathname === "/login.html" ? "active" : "",
                                ]}">Login</a>
                            </div>`;
}
