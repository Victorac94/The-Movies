export const calculateCardPosition = (poster, cardInfo) => {
  const winWidth = window.innerWidth;
console.log("calculating poster position");
  // First
  const posterInitial = poster.getBoundingClientRect();

  console.log(poster.getBoundingClientRect().left)
  // Invert
  const posterWidth = posterInitial.width;

  // Scale the poster to half the screen's width;
  const posterScale = (winWidth / 2) / posterWidth;
  // Horizontally transform the poster to horizontally center it on the screen
  const posterX = (winWidth / 4) - posterInitial.left;
  console.log(posterX);
  // Place the poster ~100px from the top of the screen
  // (50px from bottom of the header)
  const posterY = (100 * posterScale) - posterInitial.y;

  // Play
  poster.classList.add("transition");

  requestAnimationFrame(() => {
    poster.style.zIndex = "100";
    poster.style.transform = `translate(${posterX}px, ${posterY}px) scale(${posterScale})`;
  })
}
