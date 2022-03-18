const str = `5 5
HELLOWORLD
CPUCY
EKLQH
CHELL
LROWO
DGRBC`;

let i = 0;
const lineArr = str.split("\n");
function readline() {
  return lineArr[i++];
}

type Direction = "left" | "right" | "top" | "bottom";
type Pos = { x: number; y: number };
function test() {
  let [line, col] = readline()
    .split(" ")
    .map((item) => Number(item));
  let word = readline();
  let content = "";
  for (let i = 0; i < line; i++) {
    let itemStr = readline();
    content += itemStr;
  }

  const temp: { [key: string]: number[] } = {};
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    const index = content.indexOf(char);
    console.log(`test:>`, char, index);
    if (index !== -1) {
      if (!temp[char]) {
        temp[char] = [];
      }
      temp[char].push(index);
    }
  }
  console.log(`test:>`, temp);

  const set = new Set(word.split(""));

  if (set.size > Object.keys(temp).length) {
    console.log("NO");
  }

  let matchPos = 0;
  function findMatch(index: number, prePos?: number): boolean {
    const char = word[index];
    const posArr = temp[char];
    console.log(`test:>`, index, char, posArr);
    for (const pos of posArr) {
      if (prePos) {
        const direction = getDirection(prePos, pos);
        if (!direction) {
          continue;
        }
      }
      const itemResult = findMatch(index + 1, pos);
      if (itemResult) {
        matchPos = pos;
        return true;
      }
    }

    return false;
  }

  const result = findMatch(0);
  if (!result) {
    console.log("NO");
  } else {
    const pos = findPosForIndex(matchPos);
    console.log(`${pos.x} ${pos.y}`);
  }

  function getDirection(start: number, end: number) {
    const posStart = findPosForIndex(start);
    const posEnd = findPosForIndex(end);

    if (posStart.x - posEnd.x === 0) {
      let distY = posEnd.y - posStart.y;

      if (distY === 1) {
        return "bottom";
      } else if (distY === -1) {
        return "top";
      }
    }
    if (posStart.y - posEnd.y === 0) {
      let distX = posEnd.x - posStart.x;

      if (distX === 1) {
        return "right";
      } else if (distX === -1) {
        return "left";
      }
    }

    return "";
  }

  function findPosForIndex(index: number) {
    return { x: Math.floor(index / col), y: index % col };
  }
}

test();
