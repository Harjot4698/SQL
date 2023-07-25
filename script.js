// Search bar functionality
const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('input', searchError);

function searchError() {
  const searchTerm = searchBar.value.toLowerCase();
  const sections = document.querySelectorAll('section');

  sections.forEach((section) => {
    const heading = section.querySelector('h2').innerText.toLowerCase();
    if (heading.includes(searchTerm)) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
}
