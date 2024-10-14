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

console.log(popUpElements, triggersPopUpElement)

triggersPopUpElement.forEach((triger, indexTrigger) => {
  triger.addEventListener("click", () => {
    console.log(triger, indexTrigger)
    
    popUpElements[indexTrigger].classList.add("lightbox--active")
    document.body.style = "overflow: hidden"

      popUpElements[indexTrigger].addEventListener("click", (eventPopUp) => {
        eventPopUp.target.classList.remove("lightbox--active")
        document.body.style = "overflow: scroll"
      })
    })
  })
  
  // switch theme colors
  const btnSwitchColors = document.querySelector(".btn--theme")
  
  let currentTheme = localStorage.getItem("currentTheme")
  
  if (!currentTheme) {
    const defaultTheme = document.body.getAttribute("data-theme")
    localStorage.setItem("currentTheme", defaultTheme)
  } else {
    switchingСolors(currentTheme)
  }
  
  
  btnSwitchColors.addEventListener("click", () => {
    if (!currentTheme || currentTheme === "light") {
      currentTheme = "dark"
    } else {
      currentTheme = "light"
    }
  
    localStorage.setItem("currentTheme", currentTheme)
    switchingСolors(currentTheme)
  })
  
  function switchingСolors(currentTheme) {
    document.body.setAttribute("data-theme", currentTheme)
  }
})

