// Open Modal
const seeWorkButtons = document.querySelectorAll('.see-work-btn');
seeWorkButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex';
  });
});

// Close Modal
const closeButtons = document.querySelectorAll('.close-btn');
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.closest('.modal').style.display = 'none';
  });
});

// Close modal on outside click
window.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
});
