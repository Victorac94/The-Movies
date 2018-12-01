export const calculateCardInfoPosition = (cardInfo, title, rate) => {
  const runtime = document.querySelector(".MCI__runtime");
  const release = document.querySelector(".MCI__release");

  // First
  const winWidth = window.innerWidth;
  const cardInfo_collapsed = cardInfo.getBoundingClientRect();
  const rate_collapsed = rate.getBoundingClientRect();

  // Last
  cardInfo.classList.add("MCI__expanding");
  title.classList.add("MCI__expanding");
  rate.classList.add("MCI__expanding");
  runtime.classList.add("MCI__expanding");

  cardInfo.classList.add("MCI__expanded");
  rate.classList.add("MCI__rate__expanded");

  const rate_expanded_right = (winWidth - (108 + 15 + rate_collapsed.width)) / 2;
  rate.style.right = rate_expanded_right + "px";
  const cardInfo_expanded = cardInfo.getBoundingClientRect();
  const rate_expanded = rate.getBoundingClientRect();

  cardInfo.classList.remove("MCI__expanded");
  rate.style.right = "";
  rate.classList.remove("MCI__rate__expanded");

  // Invert
  const cardInfo_inverted_top = cardInfo_expanded.top - cardInfo_collapsed.top;
    // '+ 170' accounts for the pixels that it's container (cardInfo) has already moved
  const rate_inverted_top = rate_expanded.top - rate_collapsed.top + 170;
  const rate_inverted_left = rate_expanded.left - rate_collapsed.left;

  // Play
  cardInfo.style.transform = `translateY(${cardInfo_inverted_top}px)`;
  title.style.transform = `translateY(81px)`;
  rate.style.transform = `translate(${rate_inverted_left}px, ${rate_inverted_top}px)`;
  // For 'runtime' we use the same amount of translation from 'rate' because they move
  // to the same position and keep the same distance between them.
  // '+ 8' is extra top margin added for styling purposes
  runtime.style.transform = `translate(${rate_inverted_left}px, ${rate_inverted_top + 8}px)`;
  release.style.marginTop = '25px';

  requestAnimationFrame(() => {
    cardInfo.classList.add("transition");
    title.classList.add("transition");
    rate.classList.add("transition");
    runtime.classList.add("transition");

    // cardInfo.addEventListener("transitionend", function() {
    //   cardInfo.classList.remove("transition");
    //   cardInfo.classList.remove("MCI__expanding");
    // });
    //
    // title.addEventListener("transitionend", function() {
    //   title.classList.remove("transition");
    //   title.classList.remove("MCI__expanding");
    // });
    //
    // rate.addEventListener("transitionend", function() {
    //   rate.classList.remove("transition");
    //   rate.classList.remove("MCI__expanding");
    // });
    //
    // runtime.addEventListener("transitionend", function() {
    //   runtime.classList.remove("transition");
    //   runtime.classList.remove("MCI__expanding");
    // });
    //
    // cardInfo.removeEventListener("transitionend", null);
    // title.removeEventListener("transitionend", null);
    // rate.removeEventListener("transitionend", null);
    // runtime.removeEventListener("transitionend", null);
  })
}
