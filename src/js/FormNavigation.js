export default function FormNavigation() {
  const rateTodayButton = document.querySelector(
    '[data-js="rate-today-button"]'
  );

  const cancelButton = document.querySelector('[data-js="cancel-button"]');
  const saveButton = document.querySelector('[data-js="save-button"]');

  const journalPage = document.querySelector('[data-js="journal"]');
  const journalForm = document.querySelector('[data-js="journal-form"]');

  rateTodayButton.addEventListener('click', () => {
    journalPage.classList.add('hidden');
    journalForm.classList.remove('hidden');
  });

  saveButton.addEventListener('click', (event) => {
    event.preventDefault();
  });

  cancelButton.addEventListener('click', (event) => {
    event.preventDefault();
    journalPage.classList.remove('hidden');
    journalForm.classList.add('hidden');
  });
}
