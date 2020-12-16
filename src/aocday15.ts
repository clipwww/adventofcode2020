function day15() {
  console.time();

  const puzzle = `9,6,0,10,18,2,1`

  const puzzle2 = `0,3,6`;

  const puzzle3 = `1,3,2`;

  const puzzleArr = puzzle.split(',').map(s => +s);

  const answer1 = (function () {
    const arr = [...puzzleArr];
    let turn = arr.length + 1;
    while(turn <= 2020) {
      const arrIndex = turn - 1;
      const prevNum = arr[arrIndex - 1];

      if (arr.slice(0, arr.length - 1).includes(prevNum)) {
        let i = arr.lastIndexOf(prevNum);
        let j = arr.lastIndexOf(prevNum, i - 1);
        j = j < 0 ? turn : j + 1;
        i += 1;

        arr.push(Math.abs(j - i));

        // console.log(`turn: ${turn}, prevNum: ${prevNum}, push: ${Math.abs(j - i)}`);
      } else {
        arr.push(0);
        
        // console.log(`turn: ${turn}, prevNum: ${prevNum}, push: ${0}`);
      }

      turn++;
    }

    return arr[arr.length - 1];
  }())
  console.log('part1', answer1)

  const answer2 = (function () {
    const arr = [...puzzleArr];
    let turn = arr.length + 1;
    let count = 0;
    while(turn <= 30000000) {
      const arrIndex = turn - 1;
      const prevNum = arr[arrIndex - 1];

      

      if (arr.slice(0, arr.length - 1).includes(prevNum)) {
        let i = arr.lastIndexOf(prevNum);
        let j = arr.lastIndexOf(prevNum, i - 1);
        j = j < 0 ? turn : j + 1;
        i += 1;

        arr.push(Math.abs(j - i));
        count++;
        // console.log(`turn: ${turn}, prevNum: ${prevNum}, push: ${Math.abs(j - i)}`);
      } else {
        arr.push(0);
        count = 0;
        // console.log(`turn: ${turn}, prevNum: ${prevNum}, push: ${0}`);
      }

      if (count > 100) {
        console.log(turn);
      }

      turn++;
    }

    return arr[arr.length - 1];
  }())
  console.log('part2', answer2)

  console.timeEnd();
}

day15()