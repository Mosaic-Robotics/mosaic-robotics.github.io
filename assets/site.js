const toggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-site-nav]");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const searchInput = document.querySelector("[data-publication-search]");
const publications = [...document.querySelectorAll("[data-publication]")];

if (searchInput && publications.length) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    publications.forEach((item) => {
      item.hidden = query && !item.textContent.toLowerCase().includes(query);
    });
  });
}
