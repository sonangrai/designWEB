function toggle(source) {
  var checkboxes = document.querySelectorAll(".checkbox-item input");
  for (var i = 0, n = checkboxes.length; i < n; i++) {
    checkboxes[i].checked = source.checked;
  }
}

function check(source) {
  if (source.checked == false) {
    document.getElementById("all").checked = false;
  } else {
    checko();
  }
}

function checko() {
  if (
    document.getElementById("angular").checked == false ||
    document.getElementById("react").checked == false ||
    document.getElementById("vue").checked == false
  ) {
    document.getElementById("all").checked = false;
  } else {
    document.getElementById("all").checked = true;
  }
}
