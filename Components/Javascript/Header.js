 function toggleMenu() {
      document.getElementById("navLinks").classList.toggle("active");
    }
 
 
 const searchToggle = document.getElementById('searchToggle');
  const searchBar = document.getElementById('searchBar');

  searchToggle.addEventListener('click', () => {
    if (searchBar.style.display === 'flex') {
      searchBar.style.display = 'none';
    } else {
      searchBar.style.display = 'flex';
    }
  });