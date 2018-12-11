export const calculateCardPosition = (poster, cardInfo) => {
  const winWidth = window.innerWidth;
console.log("calculating");
  // First
  const posterInitial = poster.getBoundingClientRect();

  // Invert
  const posterWidth = posterInitial.width;
  poster.style.width = posterWidth;

  // Scale the poster to half the screen's width;
  const posterScale = (winWidth / 2) / posterWidth;
  // Center the poster horizontally
  const posterX = (winWidth / 4) - posterInitial.x;
  // Place the poster ~100px from the top of the screen
  // (50px from bottom of the header)
  const posterY = (100 * posterScale) - posterInitial.y;

  // Play
  poster.classList.add("transition");

  requestAnimationFrame(() => {
    poster.style.transform = `translate(${posterX}px, ${posterY}px) scale(${posterScale})`;
  })
}
