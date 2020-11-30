function bubble_sort() {

      var i = 0, j = 0;

      for (i = 0; i < len; i++) {
            for (j = 0; j < len - i - 1; j++) {

                  div_update(divs[j], div_sizes[j], "yellow", div_sizes[j]);
                  if (div_sizes[j] > div_sizes[j + 1]) {

                        div_update(divs[j], div_sizes[j], "red", div_sizes[j]);
                        div_update(divs[j + 1], div_sizes[j + 1], "red", div_sizes[j + 1]);

                        var temp = div_sizes[j + 1];
                        div_sizes[j + 1] = div_sizes[j];
                        div_sizes[j] = temp;

                        div_update(divs[j], div_sizes[j], "red", div_sizes[j]);
                        div_update(divs[j + 1], div_sizes[j + 1], "red", div_sizes[j + 1]);
                  }
                  div_update(divs[j], div_sizes[j], "yellow", div_sizes[j]);
            }

            div_update(divs[j], div_sizes[j], "green", div_sizes[j]);
      }

      div_update(divs[0], div_sizes[0], "green", div_sizes[0]);
}