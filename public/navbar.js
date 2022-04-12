let ham = document.getElementById("ham");
  let cross = document.getElementById("cross");
  let li = document.getElementsByClassName("li");
  let rightid = document.getElementById("rightid");
  let icons = document.getElementById("icons");
  ham.addEventListener("click", () => {
    ham.classList.toggle("inline");
    ham.classList.toggle("hidden");
    cross.classList.toggle("inline");
    cross.classList.toggle("hidden");
    for (let index = 0; index < li.length; index++) {
      li[index].style.display = "block";
    }
  });
  cross.addEventListener("click", () => {
    ham.classList.toggle("inline");
    ham.classList.toggle("hidden");
    cross.classList.toggle("inline");
    cross.classList.toggle("hidden");
    for (let index = 0; index < li.length; index++) {
      li[index].style.display = "none";
    }
  });