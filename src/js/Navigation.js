import {
  setClass,
  removeClass,
  getAllElements,
} from './services/helperFunctions'

export default function Navigation() {
  const navItems = getAllElements('.navigation__item')
  const pages = getAllElements('[data-js*="page"]')

  const pagesMap = [...pages].map((page) => ({
    name: pageName(page.dataset.js),
    page,
  }))

  ;(function initNavigation() {
    navItems.forEach(registerNavigationHandler)
  })()

  function registerNavigationHandler(navItem) {
    navItem.addEventListener('click', () => handleNavigation(navItem, pagesMap))
  }

  function handleNavigation(navItem, pagesMap) {
    setActiveNavLink(navItems, navItem)
    pagesMap.forEach((page) => hidePage(page.page))
    showSelectedPage(navItem, pagesMap)
  }
}

function hidePage(page, classIdentifier = 'hidden') {
  setClass(page, classIdentifier)
}

function setActiveNavLink(navItems, clickedNavItem) {
  const activeNavItemClass = 'navigation__item--active'
  navItems.forEach((navItem) => removeClass(navItem, activeNavItemClass))
  setClass(clickedNavItem, activeNavItemClass)
}

function pageName(dataset) {
  return dataset.split('-')[0]
}

function showSelectedPage(clickedNavItem, pagesMap) {
  const pagesIdentifier = pageName(clickedNavItem.dataset.js)
  const activePage = pagesMap.find((page) => page.name === pagesIdentifier)
  if (activePage.page) {
    removeClass(activePage.page, 'hidden')
  }
}
