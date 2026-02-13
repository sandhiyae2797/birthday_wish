// Select the card
const card = document.querySelector('.card');

// Function to toggle open class
function openWish() {
  card.classList.toggle('open');
}

// Optional: close card if clicked outside
document.addEventListener('click', function(e) {
  if (!card.contains(e.target)) {
    card.classList.remove('open');
  }
});
