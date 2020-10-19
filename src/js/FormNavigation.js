import { getElement, setClass, removeClass } from './services/helperFunctions'

export default function FormNavigation() {
  const rateTodayButton = getElement('[data-js="rate-today-button"]')
  const cancelButton = getElement('[data-js="cancel-button"]')
  const saveButton = getElement('[data-js="save-button"]')

  const journalPage = getElement('[data-js="journal-page"]')
  const journalForm = getElement('[data-js="journal-form"]')

  rateTodayButton.addEventListener('click', () => {
    setClass(journalPage, 'hidden')
    removeClass(journalForm, 'hidden')
  })

  saveButton.addEventListener('click', (event) => {
    event.preventDefault()
  })

  cancelButton.addEventListener('click', (event) => {
    event.preventDefault()
    setClass(journalForm, 'hidden')
    removeClass(journalPage, 'hidden')
  })
}
