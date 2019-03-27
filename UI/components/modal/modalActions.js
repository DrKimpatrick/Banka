const appModal = () => {
  // Get the modals
  var deactivateModal = document.getElementById('deactivateModal');
  var deleteModal = document.getElementById('deleteModal');

  // Get the buttons that opens the modal
  var deactivateButton = document.getElementById("deactivateBtn");
  var deleteBtn = document.getElementById("deleteButton");

  // if (deactivateButton){
  deactivateButton.onclick = function() {
    deactivateModal.style.display = "block";
  }
  // }
  // if (deleteBtn){
  deleteBtn.onclick = function() {
    deleteModal.style.display = "block";
  }
  // }
   // When the user clicks on the button, open the modal 

  // all buttons that have class close
  var closeButtons = document.querySelectorAll('.close');

  // When the user clicks on <span> (x), close the modal
  // we have a two buttons doing the work of closing the modal
  for (let node of closeButtons){
    node.onclick = function() {
      deactivateModal.style.display = "none";
      deleteModal.style.display = "none";
    }
  }
  

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == deactivateModal) {
      deactivateModal.style.display = "none";
    }else if (event.target == deleteModal){
      deleteModal.style.display = "none";
    }
  }
}

window.addEventListener('load', appModal);
window.addEventListener('hashchange', appModal);