// Show/hide hidden messages when buttons are clicked
function showMessage(id) {
  const msg = document.getElementById(id);
  if(msg.style.display === "none" || msg.style.display === "") {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }
}
