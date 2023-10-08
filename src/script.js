document.querySelectorAll(".sect, .video-sect, .book-sect").forEach((item) => {
  item.addEventListener("click", () => {
    const content = item.nextElementSibling
    const arrow = item.querySelector("i")
    if (content.style.maxHeight) {
      content.style.maxHeight = null
      content.style.marginBottom = 0
    } else {
      content.style.maxHeight = content.scrollHeight + "px"
      content.style.marginBottom = "1rem"
    }
    arrow.classList.toggle("rotate")
  })
})

document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    })
  })
})
