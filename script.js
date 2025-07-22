document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('closeBtn');

 
  closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
  });
});