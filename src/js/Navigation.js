import { setClass, removeClass, getElement } from './services/helperFunctions'

export default function Navigation() {
  const dashboardPage = getElement('[data-js="dashboard"]')
  const buddiesPage = getElement('[data-js="code-buddies"]')
  const teamsPage = getElement('[data-js="teams"]')
  const energyPage = getElement('[data-js="energy"]')
  const journalPage = getElement('[data-js="journal"]')

  const dashboardNavItem = getElement('[data-js="dashboard-nav-item"]')
  const buddiesNavItem = getElement('[data-js="buddies-nav-item"]')
  const teamsNavItem = getElement('[data-js="teams-nav-item"]')
  const energyNavItem = getElement('[data-js="energy-nav-item"]')
  const journalNavItem = getElement('[data-js="journal-nav-item"]')

  dashboardNavItem.addEventListener('click', () => {
    showPage(dashboardPage)
    hidePage(buddiesPage)
    hidePage(teamsPage)
    hidePage(energyPage)
    hidePage(journalPage)

    setClass(dashboardNavItem, 'navigation__item--active')
    removeClass(buddiesNavItem, 'navigation__item--active')
    removeClass(teamsNavItem, 'navigation__item--active')
    removeClass(energyNavItem, 'navigation__item--active')
    removeClass(journalNavItem, 'navigation__item--active')
  })

  buddiesNavItem.addEventListener('click', () => {
    hidePage(dashboardPage)
    showPage(buddiesPage)
    hidePage(teamsPage)
    hidePage(energyPage)
    hidePage(journalPage)

    removeClass(dashboardNavItem, 'navigation__item--active')
    setClass(buddiesNavItem, 'navigation__item--active')
    removeClass(teamsNavItem, 'navigation__item--active')
    removeClass(energyNavItem, 'navigation__item--active')
    removeClass(journalNavItem, 'navigation__item--active')
  })

  teamsNavItem.addEventListener('click', () => {
    hidePage(dashboardPage)
    hidePage(buddiesPage)
    showPage(teamsPage)
    hidePage(energyPage)
    hidePage(journalPage)

    removeClass(dashboardNavItem, 'navigation__item--active')
    removeClass(buddiesNavItem, 'navigation__item--active')
    setClass(teamsNavItem, 'navigation__item--active')
    removeClass(energyNavItem, 'navigation__item--active')
    removeClass(journalNavItem, 'navigation__item--active')
  })

  energyNavItem.addEventListener('click', () => {
    hidePage(dashboardPage)
    hidePage(buddiesPage)
    hidePage(teamsPage)
    showPage(energyPage)
    hidePage(journalPage)

    removeClass(dashboardNavItem, 'navigation__item--active')
    removeClass(buddiesNavItem, 'navigation__item--active')
    removeClass(teamsNavItem, 'navigation__item--active')
    setClass(energyNavItem, 'navigation__item--active')
    removeClass(journalNavItem, 'navigation__item--active')
  })

  journalNavItem.addEventListener('click', () => {
    hidePage(dashboardPage)
    hidePage(buddiesPage)
    hidePage(teamsPage)
    hidePage(energyPage)
    showPage(journalPage)

    removeClass(dashboardNavItem, 'navigation__item--active')
    removeClass(buddiesNavItem, 'navigation__item--active')
    removeClass(teamsNavItem, 'navigation__item--active')
    removeClass(energyNavItem, 'navigation__item--active')
    setClass(journalNavItem, 'navigation__item--active')
  })
}

function hidePage(page, classIdentifier = 'hidden') {
  setClass(page, classIdentifier)
}

function showPage(page, classIdentifier = 'hidden') {
  removeClass(page, classIdentifier)
}
