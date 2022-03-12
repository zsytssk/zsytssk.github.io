import * as http from "./http";
import * as fetchUtil from "./fetch";

// get Post auth

async function main() {
  console.log(`test:>`);
  const result = await fetchUtil.request(
    "https://api.weatherapi.com/v1/current.json?key=f0ebd22d679b4f44ba494712221103&q=London&aqi=no",
    "GET"
  );
  console.log(result);
}

main();

// // get
// function xmlTest1() {
//   var xhr = new XMLHttpRequest(),
//     method = "GET",
//     url =
//       "https://api.weatherapi.com/v1/current.json?key=f0ebd22d679b4f44ba494712221103&q=London&aqi=no";

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       console.log(xhr.responseText);
//     }
//   };

//   xhr.open(method, url, true);
//   xhr.send();
// }

// // post
// function xmlTest2() {
//   const new_title = "title";
//   const userId = "zsytssk";
//   const body = `est rerum tempore vitae
//   sequi sint nihil reprehenderit dolor beatae ea dolores neque
//   fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis
//   qui aperiam non debitis possimus qui neque nisi nulla`;

//   var xhr = new XMLHttpRequest(),
//     method = "POST",
//     url = "https://jsonplaceholder.typicode.com/posts";

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 201)) {
//       console.log(xhr.responseText);
//     }
//   };
//   xhr.open(method, url, true);
//   xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
//   xhr.send(
//     JSON.stringify({
//       title: new_title,
//       body: body,
//       userId: userId,
//     })
//   );
// }

// // Auth
// function xmlTest3() {
//   var xhr = new XMLHttpRequest(),
//     method = "GET",
//     url = "https://auth0.com/";

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       console.log(xhr.responseText);
//     }
//   };

//   xhr.open(method, url, true);
//   xhr.setRequestHeader("Authorization", "Bearer XXXXXXXXXXXXXXXXXXXXX");
//   xhr.send();
// }

// xmlTest3();
