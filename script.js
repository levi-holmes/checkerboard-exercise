// Your JS // Your JS goes here
// * Each tile should be a `div`
// * Each tile's width is `11.1%`
// * Set each tile's `float` property to `left`
// * Each tile's paddingBottom is `11.1%`

function checkboard(){
  for (i=0; i<81; i++) {
    if (i % 2 === 0) {
      var div = document.createElement('div')
      document.body.appendChild(div)
      div.style.paddingBottom = '11.1%'
      div.style.width = '11.1%'
      div.style.float = 'left'
      div.style.backgroundColor = 'black'
    } else {
      var div = document.createElement('div')
      document.body.appendChild(div)
      div.style.paddingBottom = '11.1%'
      div.style.width = '11.1%'
      div.style.float = 'left'
      div.style.backgroundColor = 'red'
    }
  }
}

// Your JS goes here:
// * Each tile should be a `div`
// * Each tile's width is `11.1%`
// * Set each tile's `float` property to `left`
// * Each tile's paddingBottom is `11.1%`
// Color change
var body = document.getElementsByTagName('body')[0];
for (var i = 0; i < 81; i++) {
  let div = document.createElement('div');
  let red = (Math.floor(Math.random() * 256)).toString();
  let green = (Math.floor(Math.random() * 256)).toString();
  let blue = (Math.floor(Math.random() * 256)).toString();
  div.style.float = "left";
  div.style.width = "11.1%";
  div.style.paddingBottom = "11.1%";
  div.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")"
  body.appendChild(div);
}

// Your JS goes here
//gradient:
var body = document.getElementsByTagName('body')[0];
body.style.background = "linear-gradient(135deg, red, blue)";
for (var i = 1; i < 81; i++) {
  let div = document.createElement('div');
  div.style.float = "left";
  div.style.width = "11.1%";
  div.style.paddingBottom = "11.1%";
  if (i % 2 === 0) {
    div.style.backgroundColor = "rgba(173, 33, 99, " + (.02 * i) + ")";
  } else {
    div.style.backgroundColor = "rgba(13, 133, 199, " + (.02 * i) + ")";
  }
  body.appendChild(div);
}

//flash

// Your JS goes here
// multicolored:

function flash() {
  for (var i = 0; i < 81; i++) {
    let red = (Math.floor(Math.random() * 256)).toString();
    let green = (Math.floor(Math.random() * 256)).toString();
    let blue = (Math.floor(Math.random() * 256)).toString();
    body.children[i].style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")"
  }
}

setInterval(flash, 2000);
