// Edit the shared header, navigation, and footer here to update every page.
const header = document.querySelector("[data-site-header]");
const footer = document.querySelector("[data-site-footer]");

if (header) {
  header.insertAdjacentHTML("beforebegin", '<a class="skip-link" href="#main">Skip to content</a>');
  header.innerHTML = `
    <div class="nav-shell">
      <a class="brand" href="index.html" aria-label="MOSAIC Robotics Lab home">
        <img class="brand-mark" src="assets/penrose.svg" alt="">
        <span class="brand-text">
          <strong>MOSAIC Robotics Lab</strong>
          <span>multisensory systems for adaptive and interactive cognition</span>
        </span>
      </a>
      <button class="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false" aria-controls="site-navigation" data-nav-toggle>Menu</button>
      <nav id="site-navigation" class="site-nav" aria-label="Main navigation" data-site-nav>
        <a href="index.html">Home</a>
        <a href="people.html">People</a>
        <a href="publications.html">Publications</a>
        <a href="join.html">Join / Contact</a>
      </nav>
    </div>
  `;

  // The root URL and /index.html both represent the home page.
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  header.querySelectorAll(".site-nav a").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.setAttribute("aria-current", "page");
    }
  });
}

if (footer) {
  footer.innerHTML = `
    <div class="footer-inner">
      <p><strong>MOSAIC Robotics Lab</strong><br>Department of Mechanical & Aerospace Engineering, University of Houston</p>
      <p><a href="join.html">Contact</a></p>
    </div>
  `;
}

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
