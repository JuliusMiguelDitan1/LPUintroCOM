// Timestamp auto-fill
const timestampField = document.getElementById('timestamp');
if (timestampField) {
  timestampField.value = new Date().toISOString();
}

// Membership card modals
const joinCards = document.querySelectorAll('.card a');
if (joinCards.length > 0) {
  joinCards.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const modal = document.querySelector(link.getAttribute('href'));
      if (modal) modal.showModal();
    });
  });
}
