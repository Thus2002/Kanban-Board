let draggedItem = null;

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  draggedItem = event.target;
}

function drop(event) {
  event.preventDefault();
  if (event.target.classList.contains('board-body')) {
    event.target.appendChild(draggedItem);
  }
}
