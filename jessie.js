// grab header from DOM
const headerTag = document.querySelector('header')
const blobGroups = document.querySelectorAll('g.blob')

// create fadeHeader function
// which creates fading animation
const fadeHeader = () => {
  const pixels = window.pageYOffset

  headerTag.style.opacity = 1 - easing(pixels / 100)
}

const easing = (x) => {
  return x * x * x
}

const checkBlobs = () => {
  const pixels = window.pageYOffset

  blobGroups.forEach((blob) => {
    if (pixels > 500) {
      console.log('checked blobs')
      blob.classList.add('in-view')
    }
  })
}

// call fadeHeader function when scrolls
window.addEventListener('scroll', () => {
  fadeHeader()
  checkBlobs()
})
