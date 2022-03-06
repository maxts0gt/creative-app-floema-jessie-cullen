// grab header from DOM
const headerTag = document.querySelector('header')
// grab blobs from DOM
const blobGroups = document.querySelectorAll('g.blob')
// grab section
const sectionsTags = document.querySelectorAll('section')

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

  blobGroups.forEach((blob, index) => {
    const currentSection = sectionsTags[index]

    if (pixels > currentSection.offsetTop) {
      blob.classList.add('in-view')
    } else {
      blob.classList.remove('in-view')
    }
  })
}

// call fadeHeader function when scrolls
window.addEventListener('scroll', () => {
  fadeHeader()
  checkBlobs()
})
