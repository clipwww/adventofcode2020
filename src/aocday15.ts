function day15() {
  console.time();

  const puzzle = `9,6,0,10,18,2,1`

  const puzzle2 = `0,3,6`;

  const puzzle3 = `1,3,2`;

  const puzzleArr = puzzle.split(',').map(s => +s);

  const answer1 = (function () {
    const arr = [...puzzleArr];
    let prevNum = 0;
    let turn = arr.length + 1;
    let map = new Map();

    function writeRecord(num: number, i: number) {
      const indexRecord = map.get(num);
      if (!indexRecord) {
        map.set(num, [undefined, i])
      } else {
        map.set(num, [indexRecord[1], i])
      }
    }

    arr.forEach((num, index) => writeRecord(num, index + 1))
    prevNum = arr[arr.length - 1];

    while(turn <= 2020) {     
      // console.log(prevNum, map.get(prevNum))
      if (map.has(prevNum) && map.get(prevNum)[0] >= 0) {
        let [i, j] = map.get(prevNum);
        i = isNaN(i) ? turn : i;

        const num = Math.abs(i - j);
        prevNum = num;
        writeRecord(num, turn)

        // console.log(`turn: ${turn}, prevNum: ${prevNum}, push: ${Math.abs(j - i)}`);
      } else {
        prevNum = 0;
        writeRecord(0, turn)

        // console.log(`turn: ${turn}, prevNum: ${prevNum}, push: ${0}`);
      }
          

      turn++;
    }

    return prevNum;
  }())
  console.log('part1', answer1)

  const answer2 = (function () {
    const arr = [...puzzleArr];
    let prevNum = 0;
    let turn = arr.length + 1;
    let map = new Map();

    function writeRecord(num: number, i: number) {
      const indexRecord = map.get(num);
      if (!indexRecord) {
        map.set(num, [undefined, i])
      } else {
        map.set(num, [indexRecord[1], i])
      }
    }

    arr.forEach((num, index) => writeRecord(num, index + 1))
    prevNum = arr[arr.length - 1];

    while(turn <= 30000000) {     
      // console.log(prevNum, map.get(prevNum))
      if (map.has(prevNum) && map.get(prevNum)[0] >= 0) {
        let [i, j] = map.get(prevNum);
        i = isNaN(i) ? turn : i;

        const num = Math.abs(i - j);
        prevNum = num;
        writeRecord(num, turn)

        // console.log(`turn: ${turn}, prevNum: ${prevNum}, push: ${Math.abs(j - i)}`);
      } else {
        prevNum = 0;
        writeRecord(0, turn)

        // console.log(`turn: ${turn}, prevNum: ${prevNum}, push: ${0}`);
      }
          

      turn++;
    }

    return prevNum;
  }())
  console.log('part2', answer2)

  console.timeEnd();
}

day15()