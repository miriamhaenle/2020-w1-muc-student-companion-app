export default {
  title: 'Header',
}

export const Header = (args) => `<header class="header">
<h1 class="header__headline">${args.innerText}</h1>
</header>`

Header.args = { innerText: 'Dashboard' }
