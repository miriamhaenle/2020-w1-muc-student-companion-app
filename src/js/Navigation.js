import {
  setClass,
  removeClass,
  getElement,
  getAllElements,
} from './services/helperFunctions'

export default function Navigation() {
  const dashboardPage = getElement('[data-js="dashboard-page"]')
  const buddiesPage = getElement('[data-js="buddies-page"]')
  const teamsPage = getElement('[data-js="teams-page"]')
  const energyPage = getElement('[data-js="energy-page"]')
  const journalPage = getElement('[data-js="journal-page"]')

  const pagesMap = {
    dashboard: dashboardPage,
    buddies: buddiesPage,
    teams: teamsPage,
    energy: energyPage,
    journal: journalPage,
  }

  const navItems = getAllElements('.navigation__item')
  const pages = getAllElements('[data-js*="page"]')

  navItems.forEach(registerEventListener)

  function registerEventListener(navItem) {
    navItem.addEventListener('click', () => handleNavigation(navItem, pagesMap))
  }

  function handleNavigation(navItem, pagesMap) {
    setActiveNavLink(navItems, navItem)
    hideAllPages(pages)
    showSelectedPage(navItem, pagesMap)
  }
}

function hidePage(page, classIdentifier = 'hidden') {
  setClass(page, classIdentifier)
}

function setActiveNavLink(navItems, clickedNavItem) {
  const activeNavItemClass = 'navigation__item--active'
  removeClass([...navItems], activeNavItemClass)
  setClass(clickedNavItem, activeNavItemClass)
}

function hideAllPages(pages) {
  pages.forEach((page) => hidePage(page))
}

function getPageIdentfierFromDataset(dataset) {
  return dataset.split('-')[0]
}

function showSelectedPage(clickedNavItem, pagesMap) {
  const pagesIdentifier = getPageIdentfierFromDataset(clickedNavItem.dataset.js)
  const activePage = pagesMap[pagesIdentifier]
  if (activePage) {
    removeClass(activePage, 'hidden')
  }
}
