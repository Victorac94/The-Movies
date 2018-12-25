import fastdom from 'fastdom';

export const calculateCardPosition = (resize) => {
  const poster = document.querySelector(".currentCard .Card__Poster");
  const posterBG = document.querySelector(".DetailsCard__posterBG");
  let winWidth;
  let posterInitial;
  let posterFinalPosX;
  let posterX;
  let posterY;
  let scroll = 0;

  if (resize) {
    const d = posterBG.getBoundingClientRect();
    scroll = 50 - d.top; // 50px from top of viewport minus px scrolled vertically in DetailsCard
    poster.classList.remove("transition");
    poster.style.opacity = "0";
    poster.style.transform = "";
  }

  fastdom.measure(() => {
    winWidth = window.innerWidth;
    posterInitial = poster.getBoundingClientRect();
    // If not on desktop
    if (winWidth < 1025) {
      posterFinalPosX = (winWidth / 2) - (posterInitial.width / 2);
      posterX = posterFinalPosX - posterInitial.left;
      posterY = 75 - posterInitial.y - scroll;
    }
  });

  fastdom.mutate(() => {
    document.querySelector(".Grid").style.overflow = "hidden";
    poster.style.opacity = "1";
    posterBG.style.height = posterInitial.height + 50 + "px";
    // If not on desktop
    if (winWidth < 1025) {
      poster.classList.add("transition");
      poster.style.zIndex = "100";
      poster.style.borderBottomLeftRadius = "5px";
      poster.style.borderBottomRightRadius = "5px";
      poster.style.transform = `translate(${posterX}px, ${posterY}px)`;
    } else {
      poster.style.zIndex = "";
    }
  });
}
