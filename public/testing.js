document.write('\
\
<link rel="stylesheet" href="/public/nav.css">\
<nav id="navbar">\
  <ul>\
    <a href="https://chat.whatsapp.com/BicNUSEy69L9P1nBN2p3uJ" target="__blank">\
      <img src="/public/logo.jfif" alt="" id="logo"\
    /></a>\
\
    <li class="li"><a href="/" class="navbarthings">Home</a></li>\
    <li class="li">\
      <a href="/public/classwork" class="navbarthings">ClassWork</a>\
    </li>\
    <li class="li">\
      <a href="/public/homework" class="navbarthings">HomeWork</a>\
    </li>\
    <li class="li">\
      <a href="/public/timetable" class="navbarthings">Time Table</a>\
    </li>\
    <li class="li">\
      <a href="/public/contactus" class="navbarthings">Contact Us</a>\
    </li>\
    <li class="right li" id="rightid">\
      <a href="/public/aboutus" class="navbarthings">About Us</a>\
    </li>\
    <div id="icons" class="right">\
      <span id="ham" class="show"\
        ><ion-icon name="reorder-three-outline"></ion-icon\
      ></span>\
      <span id="cross" class="hide"\
        ><ion-icon name="add-outline"></ion-icon\
      ></span>\
    </div>\
  </ul>\
</nav>\
<script\
  type="module"\
  src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"\
></script>\
<script\
  nomodule\
  src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"\
></script>\
<script>\
  let ham = document.getElementById("ham");\
  let cross = document.getElementById("cross");\
  let li = document.getElementsByClassName("li");\
  let rightid = document.getElementById("rightid");\
  let icons = document.getElementById("icons");\
  ham.addEventListener("click", () => {\
    ham.classList.toggle("show");\
    ham.classList.toggle("hide");\
    cross.classList.toggle("show");\
    cross.classList.toggle("hide");\
    for (let index = 0; index < li.length; index++) {\
      li[index].style.display = "block";\
    }\
  });\
  cross.addEventListener("click", () => {\
    ham.classList.toggle("show");\
    ham.classList.toggle("hide");\
    cross.classList.toggle("show");\
    cross.classList.toggle("hide");\
    for (let index = 0; index < li.length; index++) {\
      li[index].style.display = "none";\
    }\
  });\
</script>\
\
\
');