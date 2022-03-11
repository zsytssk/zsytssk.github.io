console.log(1);
process.nextTick(() => {
  console.log(8);
  setTimeout(() => {
    console.log(9);
  });
});
setTimeout(() => {
  console.log(2);
  new Promise(() => {
    console.log(11);
  });
});
requestIdleCallback(() => {
  console.log(7);
});
let promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    console.log(10);
  });
  resolve(10);
  console.log(4);
});
fn();
console.log(3);
promise.then(() => {
  console.log(12);
});
function fn() {
  console.log(6);
}
