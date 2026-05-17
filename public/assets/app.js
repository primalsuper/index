
document.addEventListener('DOMContentLoaded', () => {
  const search = document.querySelector('[data-search]');

  if(search){
    search.addEventListener('keypress', e => {
      if(e.key === 'Enter'){
        window.location.href = `/search?q=${encodeURIComponent(search.value)}`;
      }
    });
  }
});
