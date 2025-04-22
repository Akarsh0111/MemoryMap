const map = document.getElementById('map');

map.addEventListener('click', function(e) {
  if (e.target !== map) return;

  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.style.left = `${e.clientX}px`;
  bubble.style.top = `${e.clientY}px`;

  const textarea = document.createElement('textarea');
  textarea.placeholder = "What's on your mind?";
  bubble.appendChild(textarea);

  const closeBtn = document.createElement('span');
  closeBtn.textContent = '✖';
  closeBtn.className = 'close-btn';
  closeBtn.onclick = () => map.removeChild(bubble);
  bubble.appendChild(closeBtn);

  // Enable dragging
  let isDragging = false;
  let offsetX, offsetY;

  bubble.onmousedown = function(e) {
    if (e.target === textarea || e.target === closeBtn) return;

    isDragging = true;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    bubble.style.zIndex = 1000;
  };

  document.onmousemove = function(e) {
    if (isDragging) {
      bubble.style.left = `${e.clientX - offsetX}px`;
      bubble.style.top = `${e.clientY - offsetY}px`;
    }
  };

  document.onmouseup = function() {
    isDragging = false;
    bubble.style.zIndex = 1;
  };

  map.appendChild(bubble);
});
