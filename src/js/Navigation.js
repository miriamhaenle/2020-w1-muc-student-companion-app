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

    dashboardNavItem.classList.add('navigation__item--active')
    buddiesNavItem.classList.remove('navigation__item--active')
    teamsNavItem.classList.remove('navigation__item--active')
    energyNavItem.classList.remove('navigation__item--active')
    journalNavItem.classList.remove('navigation__item--active')
  })

  buddiesNavItem.addEventListener('click', () => {
    hidePage(dashboardPage)
    showPage(buddiesPage)
    hidePage(teamsPage)
    hidePage(energyPage)
    hidePage(journalPage)

    dashboardNavItem.classList.remove('navigation__item--active')
    buddiesNavItem.classList.add('navigation__item--active')
    teamsNavItem.classList.remove('navigation__item--active')
    energyNavItem.classList.remove('navigation__item--active')
    journalNavItem.classList.remove('navigation__item--active')
  })

  teamsNavItem.addEventListener('click', () => {
    hidePage(dashboardPage)
    hidePage(buddiesPage)
    showPage(teamsPage)
    hidePage(energyPage)
    hidePage(journalPage)

    dashboardNavItem.classList.remove('navigation__item--active')
    buddiesNavItem.classList.remove('navigation__item--active')
    teamsNavItem.classList.add('navigation__item--active')
    energyNavItem.classList.remove('navigation__item--active')
    journalNavItem.classList.remove('navigation__item--active')
  })

  energyNavItem.addEventListener('click', () => {
    hidePage(dashboardPage)
    hidePage(buddiesPage)
    hidePage(teamsPage)
    showPage(energyPage)
    hidePage(journalPage)

    dashboardNavItem.classList.remove('navigation__item--active')
    buddiesNavItem.classList.remove('navigation__item--active')
    teamsNavItem.classList.remove('navigation__item--active')
    energyNavItem.classList.add('navigation__item--active')
    journalNavItem.classList.remove('navigation__item--active')
  })

  journalNavItem.addEventListener('click', () => {
    hidePage(dashboardPage)
    hidePage(buddiesPage)
    hidePage(teamsPage)
    hidePage(energyPage)
    showPage(journalPage)

    dashboardNavItem.classList.remove('navigation__item--active')
    buddiesNavItem.classList.remove('navigation__item--active')
    teamsNavItem.classList.remove('navigation__item--active')
    energyNavItem.classList.remove('navigation__item--active')
    journalNavItem.classList.add('navigation__item--active')
  })
}

function hidePage(page, classIdentifier = 'hidden') {
  page.classList.add(classIdentifier)
}

function showPage(page, classIdentifier = 'hidden') {
  page.classList.remove('hidden')
}
