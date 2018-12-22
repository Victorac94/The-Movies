import fastdom from 'fastdom';

export const resetCardPosition = (poster, cardInfo) => {
  fastdom.mutate(() => {
    document.querySelector(".Grid").style.overflow = "";
    poster.style.borderBottomLeftRadius = "";
    poster.style.borderBottomRightRadius = "";
    poster.style.transform = "";
    cardInfo.style.transform = "";
  })

  const listener1 = () => {
    fastdom.mutate(() => {
      poster.style.zIndex = "";
    });
    poster.removeEventListener("transitionend", listener1);
  }

  poster.addEventListener("transitionend", listener1);
}
