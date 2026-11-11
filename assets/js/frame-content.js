// Local files can have opaque origins, so report the page without accessing the parent DOM.
window.addEventListener("pageshow", () => {
  if (window.parent !== window) {
    window.parent.postMessage({ tradpunkterPage: document.body.dataset.page }, "*");
  }
});
