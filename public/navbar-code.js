if(localStorage.getItem('positionofnavbarisleft')){
document.write(`
<!DOCTYPE html>
<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        body {
            font-family: "Lato", sans-serif;
        }

        .sidenav {

            height: 100vh;
            width: 8%;
            position: fixed;
            z-index: 100;
            top: 0;
            left: 0;
            bottom: 0px;
            background-color: #111;
            transition: 0.5s;
            display: flex;
            justify-content: start;
            align-items: center;
            flex-direction: column;
            margin-right: 60px;
        }

        .sidenav a {
            padding: 8px 8px 8px 8px;
            margin: 5px;
            text-decoration: none;
            font-size: 32px;
            color: #818181;
            display: block;
            transition: 0.3s;
        }

        .sidenav a:hover {
            color: #f1f1f1;
        }

        .sidenav .closebtn {
            display: none;
        }

        #logo {
            margin-bottom: 30px;
            height: 50px;
            border-radius: 50%;
        }

        .text {
            display: none;
        }

        .hover-text {
            display: none;
            color: white;
            padding: 15px;
            position: absolute;
            justify-content: center;
            align-items: center;
            font-size: 15px;
            border-radius: 10px;
            transition: 0.5s;
            z-index: 50;
            /* width: 120px; */
            max-width: 150px;
            white-space: nowrap;
        }

        .fixed-sidenav-text-icon {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .sidenav a:hover .hover-text {
            display: flex;
            animation: move 1s ease-in-out 1 forwards;
        }

        @keyframes move {
            0% {
                transform: translateX(10px);
            }

            100% {
                transform: translateX(105px);
            }
        }

        .red {
            background: #f53b57;
            box-shadow: 0 15px 25px #f53b5799;

        }

        .blue {
            background: #5d62fb;
            box-shadow: 0 15px 25px #5d62fb99;
        }

        .green {
            background: #05c46b;
            box-shadow: 0 15px 25px #05c46b99;
        }

        .anotherblue {
            background: #0fbcf9;
            box-shadow: 0 15px 25px #0fbcf999;
        }

        .yellow {
            background: #ffa801;
            box-shadow: 0 15px 25px #ffa80199;
        }

        .anotheryellow {
            background: #ffcb2e;
            box-shadow: 0 15px 25px #ffcb2e99;
        }

        .pink {
            background: #ff2eff;
            box-shadow: 0 15px 25px #ff2eff99;
        }

        .icon-of-navbar {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        #ham {
            font-size: 30px;
            cursor: pointer;
            position: absolute;
            top: 0;
            z-index: 5;
            margin: 8px;
        }

        .links {
            width: 100%;
            display: flex;
            justify-content: initial;
            align-items: center;
            flex-direction: column;
            height: 100%;
        }

        .bottom {

            display: flex !important;
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: flex-end;
        }

        @media screen and (max-width: 450px) {
            .sidenav {
                padding-top: 15px;
            }

            .sidenav a {
                font-size: 18px;
            }
        }

        @media screen and (max-width: 1000px) {

            .text {
                display: inline;
            }

            .sidenav {
                padding-top: 15px;
            }

            .sidenav a {
                font-size: 18px;
            }

            #logo {
                margin-bottom: 70px;
                height: 50px;
                border-radius: 50%;
            }

            .sidenav {

                height: 100%;
                width: 0;
                position: fixed;
                z-index: 100;
                top: 0;
                left: 0;
                background-color: #111;
                overflow: hidden;
                transition: 0.5s;
                padding-top: 60px;
                display: flex;
                justify-content: start;
                align-items: center;
                flex-direction: column;
            }

            .sidenav a {
                padding: 8px 8px 8px 8px;
                text-decoration: none;
                font-size: 25px;
                color: #818181;
                display: block;
                transition: 0.3s;
            }

            .sidenav a:hover {
                color: #f1f1f1;
            }

            .sidenav .closebtn {
                display: inline;
                position: absolute;
                top: 0;
                right: 25px;
                font-size: 36px;
                margin-left: 50px;
            }

            .hover-text {
                display: none;
            }

            .icon-of-navbar {
                display: none;
            }

            .sidenav a:hover .hover-text {
                display: none;
                animation: none;
            }

            .bottom {

                display: flex !important;
                width: 100%;
                height: 100%;
                justify-content: center;
                align-items: center;
            }
        }
    </style>
</head>

<body>

    <div id="mySidenav" class="sidenav">
        <a href="https://chat.whatsapp.com/BicNUSEy69L9P1nBN2p3uJ" target="__blank">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <img src="/public/logo.jfif" alt="" id="logo" /></a>
        <div class="links">
            <a href="/"><span class="text">Home</span>
                <span class="fixed-sidenav-text-icon">
                    <ion-icon name="home" class="icon-of-navbar"></ion-icon><span class="hover-text red">Home</span>
                </span>
            </a>
            <a href="/public/classwork"><span class="text">ClassWork</span>
                <span class="fixed-sidenav-text-icon">
                    <ion-icon name="book" class="icon-of-navbar"></ion-icon><span
                        class="hover-text blue">ClassWork</span>
                </span>
            </a>
            <a href="/public/homework"><span class="text">HomeWork</span>
                <span class="fixed-sidenav-text-icon">
                    <ion-icon name="pencil-outline" class="icon-of-navbar"></ion-icon><span
                        class="hover-text green">HomeWork</span>
                </span>
            </a>
            <a href="/public/timetable"><span class="text">Time Table</span>
                <span class="fixed-sidenav-text-icon">
                    <ion-icon name="calendar-outline" class="icon-of-navbar"></ion-icon><span
                        class="hover-text anotherblue">Time Table</span>
                </span>
            </a>
            <a href="/public/contactus"><span class="text">Contact Us</span>
                <span class="fixed-sidenav-text-icon">
                    <ion-icon name="call" class="icon-of-navbar"></ion-icon><span class="hover-text yellow">Contact
                        Us</span>
                </span>
            </a>
            <a href="/public/aboutus"><span class="text">About us</span>
                <span class="fixed-sidenav-text-icon">
                    <ion-icon name="people-outline" class="icon-of-navbar"></ion-icon><span
                        class="hover-text anotheryellow">About Us</span>
                </span>
            </a>
            <a href="/public/settings" class="bottom"><span class="text">Settings</span>
                <span class="fixed-sidenav-text-icon">
                    <ion-icon name="settings-outline" class="icon-of-navbar last"></ion-icon><span
                        class="hover-text pink">Settings</span>
                </span>
            </a>
        </div>
    </div>


    <span onclick="openNav()" id="ham">&#9776; </span>

    <script>
        function openNav() {
            document.getElementById("mySidenav").style.width = "250px";
        }

        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
        }
    </script>

</body>
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

</html>
`)
  }
  else if(localStorage.getItem('positionofnavbarisfulls')){
document.write(`
<!DOCTYPE html>
<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <style>
        body {
            font-family: "Lato", sans-serif;
            overflow: hidden;
        }

        .sidenav {

            height: 0%;
            width: 0;
            position: fixed;
            z-index: 100;
            top: 0;
            left: 0;
            background-color: #111;
            overflow: hidden;
            transition: 0.5s;
            padding-top: 60px;
            display: flex;
            justify-content: start;
            align-items: center;
            flex-direction: column;
        }

        .sidenav a {
            padding: 8px 8px 8px 32px;
            text-decoration: none;
            font-size: 25px;
            color: #818181;
            display: block;
            transition: 0.3s;
        }
        .sidenav i{
            margin: 0 15px;
        }



        .sidenav a:hover {
            color: #f1f1f1;
        }

        .sidenav .closebtn {
            position: absolute;
            top: -5px;
            right: 0;
            font-size: 36px;
            margin-left: 50px;
        }

        #logo {
            margin: 15px;
            height: 50px;
            border-radius: 50%;
        }

        @media screen and (max-height: 450px) {
            .sidenav {
                padding-top: 15px;
            }

            .sidenav a {
                font-size: 18px;
            }
        }
    </style>
</head>

<body>

    <div id="mySidenav" class="sidenav">
        <a href="https://chat.whatsapp.com/BicNUSEy69L9P1nBN2p3uJ" target="__blank">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <img src="/public/logo.jfif" alt="" id="logo" /></a>
        <a href="/"><i class="fa fa-home"></i>Home</a>
        <a href="/public/classwork"><i class="fa fa-book"></i>ClassWork</a>
        <a href="/public/homework"><i class="fa fa-pencil"></i>HomeWork</a>
        <a href="/public/timetable"><i class="fa fa-calendar"></i>Time Table</a>
        <a href="/public/contactus"><i class="fa fa-phone"></i>Contact Us</a>
        <a href="/public/aboutus"><i class="fa fa-user"></i>About Us</a>
        <a href="/public/settings"><i class="fa fa-gear"></i>Settings</a>
    </div>


    <span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; </span>

    <script>
        function openNav() {
            document.getElementById("mySidenav").style.width = "100%";
            setTimeout(() => {

                document.getElementById("mySidenav").style.height = "100%";
            }, 500);
        }

        function closeNav() {
            document.getElementById("mySidenav").style.height = "0%";
            setTimeout(() => {

                document.getElementById("mySidenav").style.width = "0";
            }, 500);
        }
    </script>

</body>
</html>

`
)
  }
  else{
    document.write(
      `
      <style>
    @import url("https://fonts.googleapis.com/css2?family=Dongle&display=swap");
* {
  margin: 0;
  padding: 0;
}
#navbar {
    background-color: #111;
    padding: 5px;
    position: sticky;
    top: 0;
    z-index: 1000;
    transition: 0.5s;
  }
  #navbar ul {
    display: flex;
    align-items: center;
    transition: 0.5s;
  }
  #navbar ul li {
    list-style: none;
    transition: 0.5s;
  }
  .navbarthings {
    color: white;
    text-decoration: none;
    margin: 15px;
    font-family: "Dongle", sans-serif;
    font-size: 2rem;
    transition: 0.5s;
  }
  /* #navbar li:last-child{
    margin-left: auto;
  } */
  .right{
    margin-left: auto;
  }
  .navbarthings:hover {
    color: rgb(177, 177, 177);
  }
  #logo {
    height: 50px;
    border-radius: 50%;
  }
  #icons{
    display: none;
    color: white;
    font-size: 2.4rem;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
  }
  .show{
    display: inline;
  }
  #cross{
    transform: rotate(45deg);
  }
  .hide{
    display: none;
  }
  .settings{
      font-size: 30px;
      cursor: pointer;
      color: white;
  }
  #settings-link{
    color: white;
    text-decoration: none;
    margin: 15px;
    font-family: "Dongle", sans-serif;
    font-size: 2rem;
    transition: 0.5s;
    display: none;
  }
  a{
    color: white;
    text-decoration: none;
  }
@media (max-width: 1033px) { 
  #about-us{
    display: inline;
  }
  #settings{
    display: none;
  }
  #icons{
    display: flex;
  }
  li{
    display: none;
  }
  #navbar ul {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .right{
    margin-left: 0;
  }
}
</style>
<nav id="navbar">
  <ul>
    <a href="https://chat.whatsapp.com/BicNUSEy69L9P1nBN2p3uJ" target="__blank">
      <img src="/public/logo.jfif" alt="" id="logo"
    /></a>

    <li class="li"><a href="/" class="navbarthings">Home</a></li>
    <li class="li">
      <a href="/public/classwork" class="navbarthings">ClassWork</a>
    </li>
    <li class="li">
      <a href="/public/homework" class="navbarthings">HomeWork</a>
    </li>
    <li class="li">
      <a href="/public/timetable" class="navbarthings">Time Table</a>
    </li>
    <li class="li">
      <a href="/public/contactus" class="navbarthings">Contact Us</a>
    </li>
    <li class="li" id="rightid">
      <a href="/public/aboutus" class="navbarthings" id="about-us">About Us</a>
    </li>
    <div class="settings right">
        <a href="/public/settings"><ion-icon name="settings-outline" id="settings"></ion-icon></a>
        <a href="/public/settings" id="settings-link">Settings</a>
    </div>
    <div id="icons" class="right">
        <span id="ham" class="show"
        ><ion-icon name="reorder-three-outline"></ion-icon
      ></span>
      <span id="cross" class="hide"
        ><ion-icon name="add-outline"></ion-icon
      ></span>
    </div>
  </ul>
</nav>
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
<script>
  let ham = document.getElementById("ham");
  let cross = document.getElementById("cross");
  let li = document.getElementsByClassName("li");
  let rightid = document.getElementById("rightid");
  let icons = document.getElementById("icons");
  let settings = document.getElementById("settings");
  let settingslink = document.getElementById("settings-link");
  settings.addEventListener('click',()=>{

  })
  ham.addEventListener("click", () => {
    ham.classList.toggle("show");
    ham.classList.toggle("hide");
    cross.classList.toggle("show");
    cross.classList.toggle("hide");
    for (let index = 0; index < li.length; index++) {
      li[index].style.display = "block";
    }
    settingslink.style.display = "inline";
  });
  cross.addEventListener("click", () => {
    ham.classList.toggle("show");
    ham.classList.toggle("hide");
    cross.classList.toggle("show");
    cross.classList.toggle("hide");
    for (let index = 0; index < li.length; index++) {
      li[index].style.display = "none";
    }
    settingslink.style.display = "none";
  });
</script>

`
    )
  }