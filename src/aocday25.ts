function day25() {
  console.time();

  const puzzle = `14205034
18047856`

  const puzzle2 = `5764801
17807724`;

  const puzzleArr = puzzle.split('\n').map(s => +s);

  const answer1 = (function () {
    const [card, door] = puzzleArr;
    let key = 1;
    let target = 1;
    let loopSize = 0;
    while (target !== door) {
      target = (target * 7) % 20201227;
      key = (key * card) % 20201227;
      loopSize++;
    }
    return key;
  }())
  console.log('part1', answer1);

  const answer2 = (function () {

  }())
  console.log('part2', answer2);

  console.timeEnd();
}

day25()