document.addEventListener("DOMContentLoaded", () => {
  // open/close menu navigation
  const buttonMenu = document.querySelector(".btn-burger")
  const navigationMenu = document.querySelector(".navigation--mobile")
  const navigationMenuContent = document.querySelector(".navigation__list")

  buttonMenu.addEventListener("click", (e) => {
    e.preventDefault()
    navigationMenu.classList.toggle("navigation--active")

    if (navigationMenu.classList.contains("navigation--active")) {
      document.body.style = "overflow: hidden"
    } else {
      document.body.style = "overflow: scroll"
    }
  })

  navigationMenu.addEventListener("click", (e) => {
    e.currentTarget.classList.remove("navigation--active")
    document.body.style = "overflow: scroll"
  })

  navigationMenuContent.addEventListener("click", (eventContent) => {
    eventContent.stopPropagation()
    console.log("click")
  })

  // video pop-up
  const popUpElements = Array.from(document.querySelectorAll(".lightbox"))
  const triggersPopUpElement = document.querySelectorAll(".trigger-popup")

  triggersPopUpElement.forEach((triger, indexTrigger) => {
    triger.addEventListener("click", () => {

      popUpElements[indexTrigger].classList.add("lightbox--active")
      document.body.style = "overflow: hidden"

      popUpElements[indexTrigger].addEventListener("click", (eventPopUp) => {
        eventPopUp.target.classList.remove("lightbox--active")
        document.body.style = "overflow: scroll"
      })
    })
  })

})