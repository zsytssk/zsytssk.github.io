let count = 0;
let line;
while ((line = readline())) {
  let [a, b] = line.split(" ");
  console.log(Number(a) + Number(b));
  count++;
}
