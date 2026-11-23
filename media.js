for (const panel of document.querySelectorAll("[data-media]")) {
  const button = panel.querySelector("[data-load-media]");
  const template = panel.querySelector("template");

  button.hidden = false;
  button.addEventListener("click", () => {
    const player = template.content.firstElementChild.cloneNode(true);
    panel.append(player);
    player.focus();
    button.hidden = true;
  }, { once: true });
}
