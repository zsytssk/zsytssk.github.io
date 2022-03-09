function findLadders(
  beginWord: string,
  endWord: string,
  wordList: string[]
): string[] {
  const beginArr = beginWord.split("");
  const endArr = endWord.split("");
  const arr = [];
  arr.push(beginWord);

  for (const item of beginArr) {
  }
  console.log(`test:>`, beginArr);
  console.log(`test:>`, endArr);

  return ["test"];
}

function main() {
  const result = findLadders("hit", "cog", [
    "hot",
    "dot",
    "dog",
    "lot",
    "log",
    "cog",
  ]);

  console.log(`test:>`, result);
}

main();
