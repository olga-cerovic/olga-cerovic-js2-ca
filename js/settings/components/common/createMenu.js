import { getUserName } from "../../utils/storage.js";

export function createMenu() {
  const { pathname } = document.location;

  const menuContainer = document.querySelector(".menu-container");

  const username = getUserName();

  let authLink = `<a href="login.html" class="${[
    pathname === "/login.html" ? "active" : "",
  ]}">Login</a>`;

  if (username) {
    authLink = `<a href="add.html" class="${[
      pathname === "/add.html" ? "active" : "",
    ]}">Add Article</a>
                    <span class="greeting">Hi, ${username}</span>`;
  }

  menuContainer.innerHTML = `<div class="menu">
                                <a href="/" class="${[
                                  pathname === "/" ? "active" : "",
                                ]}">Home</a>
                                <a href="favorites.html" class="${[
                                  pathname === "/favorites.html"
                                    ? "active"
                                    : "",
                                ]}">Favorites</a>
                                ${authLink}
                            </div>`;
}
