export function setClass(element, classIdentifier) {
  element.classList.add(classIdentifier)
}

export function removeClass(element, classIdentifier) {
  element.classList.remove(classIdentifier)
}

export function getElement(selector) {
  return document.querySelector(selector)
}
