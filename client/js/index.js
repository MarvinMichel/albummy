// HTML elements
const dropZone = document.getElementById("drop-zone")
const slideShow = document.querySelector(".slideshow")
const editInputs = document.querySelectorAll(".edit input, .edit textarea")

// Feature detection
const isTouchDevice = ("ontouchstart" in document.documentElement)
const dropSupported = ("ondrop" in document.documentElement)
const fileReaderSupported = ("FileReader" in window)
const scrollIntoViewSupported = ("scrollIntoView" in document.documentElement)

if (dropZone) {
  const fileInput = document.getElementById("file")
  const fileNameContainer = document.getElementById("file-name")

  dropZone.addEventListener("dragover", (e) => {
    e.target.classList.add("active")
    e.preventDefault()
  })
  
  dropZone.addEventListener("dragleave", (e) => {
    e.target.classList.remove("active")
    e.preventDefault()
  })

  if (dropSupported) {
    dropZone.addEventListener("drop", (e) => {
      const images = e.dataTransfer.files
      handleUpload(images)
      e.target.classList.remove("active")
      e.preventDefault()
    })
  }

  fileInput.addEventListener("change", (e) => {
    const images = e.target.files
    const [{ name: fileName }] = images
    fileNameContainer.textContent = fileName
    handleUpload(images)
    e.preventDefault()
  })
  
  function handleUpload(images) {
    fileInput.files = images
    images = [...images]
    images.forEach(image => {
      if (fileReaderSupported) {
        previewImage(image)
      }
    })
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

if (slideShow && scrollIntoViewSupported && !isTouchDevice) {
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