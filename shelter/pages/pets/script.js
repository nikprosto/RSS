window.onscroll = function() {stickyHeader()};

const header = document.querySelector('.header');

let sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}