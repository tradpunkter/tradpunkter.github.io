const frame = document.querySelector("#site-content");
const tabs = [...document.querySelectorAll(".nav [data-page]")];

window.addEventListener("message", (event) => {
  if (event.source !== frame.contentWindow) return;
  const page = event.data?.tradpunkterPage;
  if (!tabs.some((tab) => tab.dataset.page === page)) return;

  tabs.forEach((tab) => {
    if (tab.dataset.page === page) {
      tab.setAttribute("aria-current", "page");
    } else {
      tab.removeAttribute("aria-current");
    }
  });
});
