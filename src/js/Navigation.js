export default function Navigation() {
  const dashboardPage = document.querySelector('[data-js="dashboard"]');
  const buddiesPage = document.querySelector('[data-js="code-buddies"]');
  const teamsPage = document.querySelector('[data-js="teams"]');
  const energyPage = document.querySelector('[data-js="energy"]');
  const journalPage = document.querySelector('[data-js="journal"]');

  const dashboardNavItem = document.querySelector(
    '[data-js="dashboard-nav-item"]'
  );
  const buddiesNavItem = document.querySelector('[data-js="buddies-nav-item"]');
  const teamsNavItem = document.querySelector('[data-js="teams-nav-item"]');
  const energyNavItem = document.querySelector('[data-js="energy-nav-item"]');
  const journalNavItem = document.querySelector('[data-js="journal-nav-item"]');

  dashboardNavItem.addEventListener('click', () => {
    dashboardPage.classList.remove('hidden');
    buddiesPage.classList.add('hidden');
    teamsPage.classList.add('hidden');
    energyPage.classList.add('hidden');
    journalPage.classList.add('hidden');
  });

  buddiesNavItem.addEventListener('click', () => {
    dashboardPage.classList.add('hidden');
    buddiesPage.classList.remove('hidden');
    teamsPage.classList.add('hidden');
    energyPage.classList.add('hidden');
    journalPage.classList.add('hidden');
  });

  teamsNavItem.addEventListener('click', () => {
    dashboardPage.classList.add('hidden');
    buddiesPage.classList.add('hidden');
    teamsPage.classList.remove('hidden');
    energyPage.classList.add('hidden');
    journalPage.classList.add('hidden');
  });

  energyNavItem.addEventListener('click', () => {
    dashboardPage.classList.add('hidden');
    buddiesPage.classList.add('hidden');
    teamsPage.classList.add('hidden');
    energyPage.classList.remove('hidden');
    journalPage.classList.add('hidden');
  });

  journalNavItem.addEventListener('click', () => {
    dashboardPage.classList.add('hidden');
    buddiesPage.classList.add('hidden');
    teamsPage.classList.add('hidden');
    energyPage.classList.add('hidden');
    journalPage.classList.remove('hidden');
  });
}
