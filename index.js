document.addEventListener("DOMContentLoaded", () => {
  const stylesheets = [
    document.querySelector("link#light"),
    document.querySelector("link#dark"),
    document.querySelector("link#weird"),
  ];
  console.log(stylesheets);

  document.querySelectorAll("[data-theme]").forEach((button) => {
    const { theme } = button.dataset;
    button.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      console.log(theme);
      console.log(button);

      stylesheets.forEach((stylesheet) => {
        console.log(stylesheet);

        if (stylesheet.id === theme) {
          stylesheet.media = "";
        } else {
          stylesheet.media = "none";
        }
      });
    });
  });
});
