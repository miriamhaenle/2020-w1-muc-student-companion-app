export default {
  title: 'Button',
}

export const primaryButton = () => `<button
class="journal__button journal__button--orange"
data-js="save-button"
>
Save ✓
</button>`

export const secondaryButton = () => `<button
class="journal__button journal__button--white"
data-js="cancel-button"
>
Cancel
</button>`

export const EnergyButton100 = () => `<button class="energy__button energy__button--100">100 %</button>
`
export const EnergyButton75 = () =>
  `<button class="energy__button energy__button--75">75%</button>`

export const EnergyButton50 = () =>
  `<button class="energy__button energy__button--50">50%</button>`

export const EnergyButton25 = () =>
  `<button class="energy__button energy__button--25">25%</button>`
