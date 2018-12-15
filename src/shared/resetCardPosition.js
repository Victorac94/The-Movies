import fastdom from 'fastdom';

export const resetCardPosition = (poster, cardInfo) => {
  fastdom.mutate(() => {
    document.querySelector(".Grid").style.overflow = "";
    poster.style.borderBottomLeftRadius = "";
    poster.style.borderBottomRightRadius = "";
    poster.style.transform = "";
    poster.style.zIndex = "";
    cardInfo.style.transform = "";
  })
}
