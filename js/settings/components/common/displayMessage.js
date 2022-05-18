export default function displayMessage(messageType, message, targetElement) {
  const element = document.querySelector(targetElement);

  element.innerHtml = `<div class="message ${messageType}">${message}</div>`;
}
