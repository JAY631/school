let open = document.getElementById("open");
let close = document.getElementById("close");
let answer = document.getElementById("answer");
let leave = document.getElementById("leave");
open.onclick = function () {
  answer.style.display = "block";
  leave.style.display = "none";
  // padding.style.paddingBottom = "4em";
};
close.onclick = function () {
  answer.style.display = "none";
  leave.style.display = "block";
  // padding.style.paddingBottom = "4em";
};
