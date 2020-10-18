import {
  setClass,
  removeClass,
  getElement,
  getAllElements,
} from './services/helperFunctions'

export default function Navigation() {
  const dashboardPage = getElement('[data-js="dashboard-page"]')
  const buddiesPage = getElement('[data-js="code-buddies-page"]')
  const teamsPage = getElement('[data-js="teams-page"]')
  const energyPage = getElement('[data-js="energy-page"]')
  const journalPage = getElement('[data-js="journal-page"]')

  const dashboardNavItem = getElement('[data-js="dashboard-nav-item"]')
  const buddiesNavItem = getElement('[data-js="buddies-nav-item"]')
  const teamsNavItem = getElement('[data-js="teams-nav-item"]')
  const energyNavItem = getElement('[data-js="energy-nav-item"]')
  const journalNavItem = getElement('[data-js="journal-nav-item"]')

  const navItems = getAllElements('.navigation__item')
  const pages = getAllElements('[data-js*="page"]')

  navItems.forEach(registerEventListener)

  function registerEventListener(navItem) {
    navItem.addEventListener('click', handleNavigation)
  }

  function handleNavigation(event) {
    console.log(event.target)
    updateNavigationBar(navItems, event.target || event.target.parentNode)
    hideAllPages(pages)
    showSelectedPage(event.target.parentNode)
  }

  function showSelectedPage(clickedNavItem) {
    if (clickedNavItem.dataset.js.includes('dashboard')) {
      removeClass(dashboardPage, 'hidden')
    } else if (clickedNavItem.dataset.js.includes('buddies')) {
      removeClass(buddiesPage, 'hidden')
    } else if (clickedNavItem.dataset.js.includes('teams')) {
      removeClass(teamsPage, 'hidden')
    } else if (clickedNavItem.dataset.js.includes('energy')) {
      removeClass(energyPage, 'hidden')
    } else if (clickedNavItem.dataset.js.includes('journal')) {
      removeClass(journalPage, 'hidden')
    } else {
      return
    }
  }
}

function hidePage(page, classIdentifier = 'hidden') {
  setClass(page, classIdentifier)
}

function showPage(page, classIdentifier = 'hidden') {
  removeClass(page, classIdentifier)
}
function updateNavigationBar(navItems, clickedNavItem) {
  resetNavigation(navItems, 'navigation__item--active')
  setClass(clickedNavItem, 'navigation__item--active')
}
function resetNavigation(elements, classIdentifier) {
  elements.forEach((element) => removeClass(element, classIdentifier))
}

function hideAllPages(pages) {
  pages.forEach((page) => hidePage(page))
}
