// get
function test1() {
  var xhr = new XMLHttpRequest(),
    method = "GET",
    url = "https://api.publicapis.org/entries";

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(xhr.responseText);
    }
  };

  xhr.open(method, url, true);
  xhr.send();
}

// post
function test2() {
  var xhr = new XMLHttpRequest(),
    method = "GET",
    url = "https://jsonplaceholder.typicode.com/users";

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(xhr.responseText);
    }
  };

  xhr.open(method, url, true);
  xhr.send();
}

// Auth

test1();
