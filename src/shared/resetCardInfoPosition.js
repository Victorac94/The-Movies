export const resetCardInfoPosition = (cardInfo, title, rate) => {
  const runtime = document.querySelector(".MCI__runtime");
  const release = document.querySelector(".MCI__release");

  cardInfo.style.transform = "translate(0, 0)";
  title.style.transform = "translate(0, 0)";
  rate.style.transform = "translate(0, 0)";
  runtime.style.transform = "translate(0, 0)";
  release.style.marginTop = "15px";
}
