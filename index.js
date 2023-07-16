
const uniformsLink = document.getElementById('uniforms-link');
const linenLink = document.getElementById('linen-link');
const merchendiesLink = document.getElementById('merchendies-link');

const uniformsSection = document.getElementById('uniforms-section');
const linenSection = document.getElementById('linen-section');
const merchendiesSection = document.getElementById('merchendies-section');

linenSection.style.display = 'none';
merchendiesSection.style.display = 'none';

// Add event listeners to the navigation links
uniformsLink.addEventListener('click', function() {
  uniformsSection.style.display = 'flex';
  linenSection.style.display = 'none';
  merchendiesSection.style.display = 'none';
});

linenLink.addEventListener('click', function() {
  uniformsSection.style.display = 'none';
  linenSection.style.display = 'flex';
  merchendiesSection.style.display = 'none';
});

merchendiesLink.addEventListener('click', function() {
  uniformsSection.style.display = 'none';
  linenSection.style.display = 'none';
  merchendiesSection.style.display = 'flex';
});




