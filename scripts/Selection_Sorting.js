function selection_sort() {
      console.log("yep");
      var i = 0, j = 0, min;

      for (i = 0; i < len; i++) {
            div_update(divs[i], div_sizes[i], "yellow", div_sizes[i]);
            min = i;
            div_update(divs[i], div_sizes[i], "red", div_sizes[i]);
            for (j = i + 1; j < len; j++) {
                  if (div_sizes[min] > div_sizes[j]) {
                        div_update(divs[min], div_sizes[min], "yellow", div_sizes[min]);
                        div_update(divs[j], div_sizes[j], "red", div_sizes[j]);
                        min = j;
                  }
            }

            div_update(divs[i], div_sizes[i], "red", div_sizes[i]);
            div_update(divs[min], div_sizes[min], "red", div_sizes[min]);

            var temp = div_sizes[i];
            div_sizes[i] = div_sizes[min];
            div_sizes[min] = temp;

            div_update(divs[min], div_sizes[min], "yellow", div_sizes[min]);
            div_update(divs[i], div_sizes[i], "green", div_sizes[i]);
      }
}