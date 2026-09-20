const initPageToc = () => {
  const toc = document.querySelector(".page-toc");
  if (!toc) return;

  const links = [...toc.querySelectorAll('a[href^="#"]')];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const setCurrent = (id) => {
    links.forEach((link) => {
      const current = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("is-active", current);
      if (current) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const update = () => {
    const offset = window.scrollY + 130;
    let current = sections[0]?.id;

    sections.forEach((section) => {
      if (section.offsetTop <= offset) current = section.id;
    });

    if (current) setCurrent(current);
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPageToc);
} else {
  initPageToc();
}
