document.addEventListener("DOMContentLoaded", () => {
  const closeAccordion = (accordion, contentSelector) => {
    const content = accordion.querySelector(contentSelector);
    accordion.dataset.open = false;
    content.style.maxHeight = "";
  };

  const smothHeight = (accordionSelector, titleSelector, contentSelector) => {
    const accordions = document.querySelectorAll(accordionSelector);

    if (!accordions.length) return;

    accordions.forEach((accordion) => {
      const title = accordion.querySelector(titleSelector);
      const content = accordion.querySelector(contentSelector);

      title.addEventListener("click", (event) => {
        if (accordion.dataset.open !== "true") {
          accordions.forEach((accordionForClose) =>
            closeAccordion(accordionForClose, contentSelector)
          );
          accordion.dataset.open = true;
          content.style.maxHeight = `${content.scrollHeight}px`;
        } else {
          closeAccordion(accordion, contentSelector);
        }
      });

      const onResize = () => {
        if (accordion.dataset.open === "true") {
          if (parseInt(content.style.maxHeight) !== content.scrollHeight) {
            content.style.maxHeight = `${content.scrollHeight}px`;
          }
        }
      };

      window.addEventListener("resize", onResize);
    });
  };

  smothHeight(".accordion", ".accordion__title", ".accordion__content");
});
