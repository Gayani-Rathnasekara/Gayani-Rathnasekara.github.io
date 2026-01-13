document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="http"]');

  links.forEach(link => {
    const isExternal = !link.href.includes(window.location.hostname);
    if (isExternal) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
});

