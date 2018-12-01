export const calculatePosterPosition = (poster, side_margin) => {
  poster.classList.add("current_poster_details");

  // First
  const poster_collapsed = poster.getBoundingClientRect();

  // Last
  poster.classList.add("MCI__expanding"); // This class is in 'CardInfo.css'

  poster.classList.add("poster__showing_details");

  const poster_expanded = poster.getBoundingClientRect();

  poster.classList.remove("poster__showing_details");
  poster.style.left = "";

  // Invert
  const poster_inverted_top = poster_expanded.top - poster_collapsed.top;
  const poster_inverted_left = poster_expanded.left - poster_collapsed.left;

  // Play
  poster.style.transformOrigin = 'top left';
  poster.style.transform = `translate(${poster_inverted_left}px, ${poster_inverted_top}px) scale(0.6)`;

  requestAnimationFrame(() => {
    poster.classList.add("transition"); // This class is in 'CardInfo.css'

    // poster.addEventListener("transitionend", function() {
    //   poster.classList.remove("transition"); // This class is in 'CardInfo.css'
    //   poster.classList.remove("MCI__expanding");
    // });
    //
    // poster.removeEventListener("transitionend", null);
  })
}
