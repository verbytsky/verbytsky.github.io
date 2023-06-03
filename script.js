document.addEventListener('mousemove', function(e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;  
  document.documentElement.style.setProperty('--x', x);
  document.documentElement.style.setProperty('--y', y);
});



document.getElementById('profile-link').addEventListener('click', function(e) {
  e.preventDefault();
  this.classList.add('no-glow');
  document.getElementById('modal').style.display = 'block';
});

window.onclick = function(event) {
  if (event.target == document.getElementById('modal')) {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('profile-link').classList.remove('no-glow');
  }
}




