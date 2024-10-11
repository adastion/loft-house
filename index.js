document.addEventListener("DOMContentLoaded", () => {
  const buttonMenu = document.querySelector(".btn-burger")
  const navigationMenu = document.querySelector(".header__navigation")

  buttonMenu.addEventListener("click", (e) => {
    e.preventDefault()
    navigationMenu.classList.toggle("navigation--active")
  })

  // video pop-up
  const popUpElements = Array.from(document.querySelectorAll(".lightbox"))
  const triggersPopUpElement = document.querySelectorAll(".trigger-popup")

  triggersPopUpElement.forEach((triger, indexTrigger) => {
    triger.addEventListener("click", () => {

      popUpElements[indexTrigger].classList.add("lightbox--active")
      popUpElements[indexTrigger].addEventListener("click", (eventPopUp) => {
        eventPopUp.target.classList.remove("lightbox--active")
      })
    })
  })

})