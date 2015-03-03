window.addEventListener('load', init);

function init() {
  var firstBox = document.getElementById("one");
  var secondBox = document.getElementById("two");
  var thirdBox = document.getElementById('three');
  var fourthBox = document.getElementById('four');
  var fifthBox = document.getElementById('five');
  var sixthBox = document.getElementById('six');
  firstBox.addEventListener('dragstart', startDrag);
  secondBox.addEventListener('dragover', dragTo);
  secondBox.addEventListener('drop', doDrop);

  function startDrag(e) {
    e.dataTransfer.setData("text", e.target.innerHTML);
    e.dataTransfer.setData("id", e.target.id);
  }

  function dragTo(e) {
    e.preventDefault();
  }

  function doDrop(e) {
    var draggedItemId = e.dataTransfer.getData('id');
    console.log(draggedItemId);
    var draggedItem = document.getElementById(draggedItemId);
    var newPosition = this;
    var holder = draggedItem.innerHTML;
    draggedItem.innerHTML = newPosition.innerHTML;
    newPosition.innerHTML = holder;
    e.preventDefault();

  }
}
