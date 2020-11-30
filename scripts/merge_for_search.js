function merge(start, mid, end) {

      var p = start, q = mid + 1, k = 0;
      var arr = [];

      for (var i = start; i <= end; i++) {
            if (p > mid) {
                  //div_update(divs[q], div_sizes[q], "red", div_sizes[q]);
                  arr[k++] = div_sizes[q++];
            }
            else if (q > end) {
                  //div_update(divs[p], div_sizes[p], "red", div_sizes[p]);
                  arr[k++] = div_sizes[p++];
            }
            else if (div_sizes[p] <= div_sizes[q]) {
                  //div_update(divs[p], div_sizes[p], "red", div_sizes[p]);
                  arr[k++] = div_sizes[p++];
            }
            else {
                  //div_update(divs[q], div_sizes[q], "red", div_sizes[q]);
                  arr[k++] = div_sizes[q++];
            }
      }

      for (var i = 0; i < k; i++) {
            div_sizes[start] = arr[i];
            //div_update(divs[start], div_sizes[start], "green", div_sizes[start]);
            start++;
      }
}

function recursive_fun(start, end) {

      if (start < end) {
            var mid = Math.floor((start + end) / 2);
            //div_update(divs[mid], div_sizes[mid], "blue", div_sizes[mid]);
            recursive_fun(start, mid);
            recursive_fun(mid + 1, end);
            merge(start, mid, end);
      }
}

function search_merge_sort() {

      var start = 0;
      var end = len - 1;

      recursive_fun(start, end);

      return;
}