document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('closeBtn');
  const openPopUp = document.getElementById('openPopUp');
 
  closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
  });
});


  openPopUp.addEventListener('click', () => {
    overlay.style.display = 'flex';
  });

 
  // Mostra l'overlay al caricamento iniziale
  overlay.style.display = 'flex';