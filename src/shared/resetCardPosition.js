import fastdom from 'fastdom';

export const resetCardPosition = (poster, cardInfo, keepCardInfo) => {
  fastdom.mutate(() => {
    document.querySelector(".Grid").style.overflow = "";
    poster.style.borderBottomLeftRadius = "";
    poster.style.borderBottomRightRadius = "";
    poster.style.transform = "";
    cardInfo.style.transform = "";

    if (keepCardInfo) {
      poster.classList.remove("transition");
      poster.style.zIndex = "";
      poster.style.opacity = "";
    }
  })

  const listener1 = () => {
    fastdom.mutate(() => {
      poster.style.zIndex = "";
      poster.style.opacity = "";
    });
    poster.removeEventListener("transitionend", listener1);
  }

  if (!keepCardInfo) {
    poster.addEventListener("transitionend", listener1);
  }
}
