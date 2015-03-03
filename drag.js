window.addEventListener('load', init);

function init() {
  var allTheBoxes = document.getElementsByTagName('img');

  for (var i = 0; i < allTheBoxes.length; i++) {
    allTheBoxes[i].addEventListener('dragstart', startDrag);
    allTheBoxes[i].addEventListener('dragover', dragTo);
    allTheBoxes[i].addEventListener('drop', doDrop);
  }

  function startDrag(e) {
    e.dataTransfer.setData("id", e.target.id);
  }

  function dragTo(e) {
    e.preventDefault();
  }

  function doDrop(e) {
    var draggedItemId = e.dataTransfer.getData('id');
    var draggedItem = document.getElementById(draggedItemId);
    var newPosition = this;
    var holder = draggedItem.src;
    draggedItem.src = newPosition.src;
    newPosition.src = holder;
    e.preventDefault();
  }
}
