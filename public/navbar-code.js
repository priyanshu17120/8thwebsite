async function readTextFile(file) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var navbar = rawFile.responseText;
        document.write(`
${navbar}
`)
      }
    }
  }
  rawFile.send(null);
}




if (localStorage.getItem('positionofnavbarisleft')) {
  readTextFile('/left-navbar.html')
}
else if (localStorage.getItem('positionofnavbarisfulls')) {
  readTextFile('/full-s-navbar.html')
}
else {
  readTextFile('/top-navbar.html')
}