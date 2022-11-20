//Event Listener for the internet status
let msgItem = document.getElementById("msg");
window.addEventListener("online", function () {
  //Online Listener
  msgItem.innerHTML = "Online";
});

window.addEventListener("offline", function () {
  //Offline Listener
  msgItem.innerHTML = "Offline";
  document.querySelector(".internet").classList.add("offline");
});
