let burgerMenu = document.querySelector(".nav-toggle")
let burgerButton = document.querySelector("#nav-toggle")
let navWindow = document.querySelector(".main-nav")

burgerButton.onclick = function() {
  burgerMenu.classList.toggle('active')
  navWindow.classList.toggle('main-nav--active')
}


console.log(2 + 2)


