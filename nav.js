document.addEventListener("DOMContentLoaded", function () {

  var nav = document.querySelector(".site-nav");
  var toggle = document.querySelector(".nav-toggle");
  var galleryDropdown = document.querySelector(".nav-item-dropdown");
  var galleryToggle = document.querySelector(".nav-dropdown-toggle");

  if (!nav || !toggle) return;

  function closeGalleryDropdown() {
    if (!galleryDropdown || !galleryToggle) return;

    galleryDropdown.classList.remove("is-open");
    galleryToggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", function () {

    var isOpen = nav.classList.toggle("is-open");

    toggle.setAttribute("aria-expanded", String(isOpen));

    document.body.classList.toggle("nav-open", isOpen);

  });

  window.addEventListener("resize", function () {

    if (window.innerWidth > 768 && nav.classList.contains("is-open")) {

      nav.classList.remove("is-open");

      toggle.setAttribute("aria-expanded", "false");

      document.body.classList.remove("nav-open");
    }

    if (window.innerWidth > 768) {
      closeGalleryDropdown();
    }

  });

  if (galleryDropdown && galleryToggle) {

    galleryToggle.addEventListener("click", function () {

      var isExpanded =
        galleryToggle.getAttribute("aria-expanded") === "true";

      galleryDropdown.classList.toggle("is-open", !isExpanded);

      galleryToggle.setAttribute(
        "aria-expanded",
        String(!isExpanded)
      );

    });

    document.addEventListener("click", function (event) {

      if (!galleryDropdown.contains(event.target)) {
        closeGalleryDropdown();
      }

    });

  }

  nav.addEventListener("click", function (event) {

    var clickedLink = event.target.closest("a");

    if (!clickedLink) return;

    closeGalleryDropdown();

    nav.classList.remove("is-open");

    toggle.setAttribute("aria-expanded", "false");

    document.body.classList.remove("nav-open");

  });

});