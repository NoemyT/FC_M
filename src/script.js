const collapsable = document.querySelectorAll(".sect")
collapsable.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active")
    const content = item.nextElementSibling
    const arrow = item.querySelector("i")
    arrow.classList.toggle("rotate")
    console.log(arrow)
    if (content.style.maxHeight) {
      content.style.maxHeight = null
      content.style.marginBottom = 0
    } else {
      content.style.maxHeight = content.scrollHeight + "px"
      content.style.marginBottom = "1rem"
    }
  })
})
