// HTML elements
const dropZone = document.getElementById("drop-zone")
const slideShow = document.querySelector(".slideshow")
const editInputs = document.querySelectorAll(".edit input, .edit textarea")

// Feature detection
const isTouchDevice = ("ontouchstart" in document.documentElement)
const dropSupported = ("ondrop" in document.documentElement)
const scrollIntoViewSupported = ("scrollIntoView" in document.documentElement)
const fileReaderSupported = ("FileReader" in window)

if (dropZone && dropSupported) {
  const selectFileButton = dropZone.querySelector('input[type=file]')

  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault()
    e.target.classList.add("active")
  })
  
  dropZone.addEventListener("dragleave", (e) => {
    e.preventDefault();
    e.target.classList.remove("active")
  })

  dropZone.addEventListener("drop", (e) => {
    e.preventDefault()
    const images = e.dataTransfer.files
    handleDrop(images)
    e.target.classList.remove("active")
  })

  selectFileButton.addEventListener("change", (e) => {
    e.preventDefault()
    const images = e.target.files
    handleDrop(images)
  })
  
  function handleDrop(images) {
    selectFileButton.files = images
    images = [...images]
    if (fileReaderSupported) {
      images.forEach(image => {
        previewImage(image)
      })
    }
  }
    
  function previewImage(image) {
    const reader = new FileReader()
    reader.readAsDataURL(image)
    reader.onloadend = () => {
      const img = document.createElement("img")
      img.src = reader.result
      dropZone.appendChild(img)
    }
  }
}

if (slideShow && scrollIntoViewSupported) {
  const sliderButtons = slideShow.querySelectorAll("button")
  const slides = slideShow.querySelectorAll("img")

  let index = 0
  
  sliderButtons.forEach(button => {
    button.classList.add("js")
    button.addEventListener("click", slideImage)
  })

  function slideImage(e) {
    const targetId = e.target.id

    if (targetId === "prev") {
      if (index === 0) {
        index = slides.length - 1
        slides[index].scrollIntoView()
      } else {
        index--
        slides[index].scrollIntoView()
      }
    } else {
      if (index === (slides.length - 1)) {
        index = 0
        slides[index].scrollIntoView()
      } else {
        index++
        slides[index].scrollIntoView()
      }
    }
  }
}

if (isTouchDevice) {
  editInputs.forEach(input => input.classList.add('mobile'))
}