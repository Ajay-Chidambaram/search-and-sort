var cont = document.getElementById("array-container")
var slider = document.getElementById("myRange");
cont.style = "flex-direction:row";

var div_sizes = [];
var divs = [];

var len = 20;

var time_delay = 0;
var val = slider.value;

slider.oninput = function () {
      console.log(this.value);
      val = this.value;
}


function generate() {

      time_delay = 0;
      cont.innerHTML = "";

      try {
            var res = document.getElementById("resultText");
            res.innerHTML = "";
      } catch {

      }

      for (var i = 0; i < len; i++) {

            divs[i] = document.createElement("div");
            var h = (Math.ceil(Math.random() * 100)) % 100;
            div_sizes[i] = h === 0 ? 1 : h;

            cont.appendChild(divs[i]);
            divs[i].classList.add("ele");
            divs[i].style = "margin:0% 0.1%; background-color:rgb(243, 243, 63);width:25px;height:" + (div_sizes[i] + 25) + "px;";
            divs[i].innerHTML = div_sizes[i];

      }
}


function div_update1(cont, ht, col) {
      console.log("yep");
      cont.innerHTML = String(ht);
      cont.style = "margin:0% 0.1%; width:25px;background-color:" + col + ";height:" + (ht + 25) + "px;";
}

function div_update(cont, ht, col, txt) {
      window.setTimeout(function () {
            cont.innerHTML = txt;
            cont.style = "margin:0% 0.1%; width:25px;background-color:" + col + ";height:" + (ht + 25) + "px;";
      }, time_delay += 10 * val);
}

function div_update(cont, ht, col, txt, act, ele, index) {
      window.setTimeout(function () {
            cont.innerHTML = txt;
            cont.style = "margin:0% 0.1%; width:25px;background-color:" + col + ";height:" + (ht + 25) + "px;";
            if (index == 1) {
                  ele.innerHTML = "Searching...";
                  act.appendChild(ele);
            } else if (index == 0) {
                  ele.innerHTML = "Key Found";
                  act.appendChild(ele);
            } else {
                  ele.innerHTML = "Key Not Found";
                  act.appendChild(ele);
            }
      }, time_delay += 10 * val);
}