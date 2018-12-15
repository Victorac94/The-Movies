import fastdom from 'fastdom';

export const calculateCardPosition = (poster, cardInfo) => {
  let winWidth;
  let posterInitial;
  let posterWidth;
  let posterScale;
  let posterX;
  let posterY;

  fastdom.measure(() => {
    winWidth = window.innerWidth;
    posterInitial = poster.getBoundingClientRect();
    posterWidth = posterInitial.width;
    posterScale = (winWidth / 2) / posterWidth;
    posterX = (winWidth / 4) - posterInitial.left;
    posterY = (100 * posterScale) - posterInitial.y;
  });

  fastdom.mutate(() => {
    document.querySelector(".Grid").style.overflow = "hidden";
    poster.classList.add("transition");
    poster.style.zIndex = "100";
    poster.style.transform = `translate(${posterX}px, ${posterY}px) scale(${posterScale})`;
  });

  // const winWidth = window.innerWidth;
  //
  // // First
  // const posterInitial = poster.getBoundingClientRect();
  //
  // // Invert
  // const posterWidth = posterInitial.width;
  //
  // // Scale the poster to half the screen's width;
  // const posterScale = (winWidth / 2) / posterWidth;
  // // Horizontally transform the poster to horizontally center it on the screen
  // const posterX = (winWidth / 4) - posterInitial.left;
  // // Place the poster ~100px from the top of the screen
  // // (50px from bottom of the header)
  // const posterY = (100 * posterScale) - posterInitial.y;
  //
  // // Play
  // poster.classList.add("transition");
  //
  // requestAnimationFrame(() => {
  //   poster.style.zIndex = "100";
  //   poster.style.transform = `translate(${posterX}px, ${posterY}px) scale(${posterScale})`;
  // })
}
