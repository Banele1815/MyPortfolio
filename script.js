function scrollToSection(id) {
  var el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function sendPrompt(text) {
  if (typeof window.sendPrompt === 'function') {
    window.sendPrompt(text);
  } else {
    alert('Case study prompt:\n\n' + text);
  }
}
