// TODO find toggle button from deferred media.
// add event listener to the button for changing the background and showing close button
// remove background after close button clicked

const deferedMediaElms = document.querySelectorAll("deferred-media");

deferedMediaElms.forEach((elm) => {
  let button = elm.querySelector(
    `#Deferred-Poster-Modal-${elm.getAttribute("data-media-id")}`
  );

  button.addEventListener("click", () => {
    elm.closest(".color-background-1").classList.add("opened");
  });
});
