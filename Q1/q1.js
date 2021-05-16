const allDivs = document.querySelectorAll(".div");

function ToggleFunc(teamnumber) {
  var element = document.getElementById(teamnumber);
  if (element) {
    allDivs.forEach(function (el) {
      el.classList.remove("teamSelected");
    });
    element.classList.add("teamSelected");
  }
}