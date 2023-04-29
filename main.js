let open = document.getElementById("open");
let close = document.getElementById("close");
let answer = document.getElementById("answer");
let leave = document.getElementById("leave");
let padding = document.querySelector(".comments__content");
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

AOS.init();

Fancybox.bind("#gallery a", {
  groupAll: true,
  on: {
    ready: (fancybox) => {
      console.log(`fancybox #${fancybox.id} is ready!`);
    },
  },
});
