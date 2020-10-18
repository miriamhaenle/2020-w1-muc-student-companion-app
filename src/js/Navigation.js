import { setClass, removeClass } from './services/classToggles'

export default function Navigation() {
  const dashboardPage = document.querySelector('[data-js="dashboard"]')
  const buddiesPage = document.querySelector('[data-js="code-buddies"]')
  const teamsPage = document.querySelector('[data-js="teams"]')
  const energyPage = document.querySelector('[data-js="energy"]')
  const journalPage = document.querySelector('[data-js="journal"]')

  const dashboardNavItem = document.querySelector(
    '[data-js="dashboard-nav-item"]'
  )
  const buddiesNavItem = document.querySelector('[data-js="buddies-nav-item"]')
  const teamsNavItem = document.querySelector('[data-js="teams-nav-item"]')
  const energyNavItem = document.querySelector('[data-js="energy-nav-item"]')
  const journalNavItem = document.querySelector('[data-js="journal-nav-item"]')

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
