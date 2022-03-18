const test1 = `5`;

function readline() {
  return test1;
}

function test() {
  let level = Number(readline());

  let arr = [];
  let num = 1;
  for (let i = 1; i <= level; i++) {
    let item = [];
    for (let j = 0; j < i; j++) {
      item.push(num++);
    }
    const item1 = item.filter((a) => a % 2 === 1);
    const item2 = item.filter((a) => a % 2 === 0).reverse();
    arr.push([...item1, ...item2]);
  }

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    let str = "";
    for (let j = 0; j < item.length; j++) {
      str += printNum(item[j]);
      if (j !== item.length - 1) {
        str += "    ";
      }
    }
    console.log(printLine(str, level));
  }
}

function printNum(num: number) {
  let str = num + "";
  str += `*`.repeat(4 - str.length);
  return str;
}

function printLine(str: string, level: number) {
  const allNum = (2 * level - 1) * 4;
  const dist = allNum - str.length;
  if (dist > 0) {
    const space = " ".repeat(dist / 2);
    return space + str;
  }
  return str;
}

test();
