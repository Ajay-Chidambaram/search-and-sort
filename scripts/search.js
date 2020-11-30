var act = document.getElementById("result");
var slider = document.getElementById("myRange");

var val = slider.value;
var time_delay1 = 0;
var time_delay2 = 0;
var time_delay3 = 0;

slider.oninput = function () {
      console.log(this.value);
      val = this.value;
}

function getNum() {

      act.innerHTML = "";

      for (var i = 0; i < len; i++) {
            div_update1(divs[i], div_sizes[i], "rgb(243, 243, 63)");
      }

      var num = document.getElementById("input_num").value;
      return num;
}

function lin_search() {
      var num = getNum();

      var ele = document.createElement("h2");
      ele.id = "resultText";

      if (num == null || num == undefined || num == 0) {
            alert("Input Error");
      } else {

            for (var i = 0; i < len; i++) {


                  div_update(divs[i], div_sizes[i], "red", div_sizes[i], act, ele, 1);


                  if (div_sizes[i] == num) {
                        div_update(divs[i], div_sizes[i], "green", div_sizes[i], act, ele, 0);
                        return;
                  }


                  div_update(divs[i], div_sizes[i], "rgb(243, 243, 63)", div_sizes[i], act, ele, 1);
            }


            div_update(divs[0], div_sizes[0], "rgb(243, 243, 63)", div_sizes[0], act, ele, -99);

      }
}

function bin_search() {
      search_merge_sort();

      var num = getNum();

      var ele = document.createElement("h2");
      ele.id = "resultText";

      var mid = Math.floor((len - 1) / 2);
      var start = 0;
      var end = len - 1;

      while (start < end) {

            div_update(divs[mid], div_sizes[mid], "white", div_sizes[mid], act, ele, 1);

            if (div_sizes[mid] == num) {
                  div_update(divs[mid], div_sizes[mid], "violet", div_sizes[mid], act, ele, 0);
                  return;
            }

            if (div_sizes[mid] > num) {
                  end = mid - 1;
            } else {
                  start = mid + 1;
            }

            mid = Math.floor((start + end) / 2);

            div_update(divs[mid], div_sizes[mid], "rgb(243, 243, 63)", div_sizes[mid], act, ele, 1);
      }

      div_update(divs[0], div_sizes[0], "rgb(243, 243, 63)", div_sizes[0], act, ele, -99);
}