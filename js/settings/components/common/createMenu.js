export function createMenu() {
  const menuContainer = document.querySelector(".menu-container");

  menuContainer.innerHTML = `<div class="menu">
                                <a href="/">Home</a>
                                <a href="favorites.html">Favorites</a>
                                <a href="login.html">Login</a>
                            </div>`;
}
