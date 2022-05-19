export function getExistingFaves() {
  const faves = localStorage.getItem("favorites");

  if (faves === null) {
    return [];
  } else {
    return JSON.parse(faves);
  }
}
