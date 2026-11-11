if (window.PhotoSwipeLightbox && window.PhotoSwipe) {
  const gallery = new PhotoSwipeLightbox({
    gallery: ".gallery",
    children: "a",
    pswpModule: PhotoSwipe,
    bgOpacity: 0.94,
    showHideAnimationType: "fade",
    paddingFn: ({ x, y }) => ({
      left: Math.max(16, (x - 760) / 2),
      right: Math.max(16, (x - 760) / 2),
      top: Math.max(56, (y - 510) / 2),
      bottom: Math.max(56, (y - 510) / 2),
    }),
  });

  gallery.on("uiRegister", () => {
    const viewer = gallery.pswp;
    viewer.ui.registerElement({
      name: "screenshot-caption",
      appendTo: "root",
      onInit(caption) {
        caption.setAttribute("aria-live", "polite");
        viewer.on("change", () => {
          caption.textContent = viewer.currSlide.data.element
            .closest("figure").querySelector("figcaption").textContent;
        });
      },
    });
  });

  gallery.init();
}
