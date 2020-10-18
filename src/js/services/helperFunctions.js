export function setClass(element, classIdentifier) {
  element.classList.add(classIdentifier)
}

export function removeClass(element, classIdentifier) {
  const remove = (el) => el.classList.remove(classIdentifier)
  if (Array.isArray(element)) {
    element.forEach((element) => remove(element))
  } else {
    remove(element)
  }
}

export function getElement(selector) {
  return document.querySelector(selector)
}

export function getAllElements(selector) {
  return document.querySelectorAll(selector)
}
