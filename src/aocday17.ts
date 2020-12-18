function day17() {
  console.time();

  const puzzle = `##..#.#.
  ###.#.##
  ..###..#
  .#....##
  .#..####
  #####...
  #######.
  #.##.#.#`

  const puzzle2 = `.#.
  ..#
  ###`;

  const puzzleArr = puzzle.split('\n').map(s => s.trim())

  const answer1 = (function () {
    const cycleCount = 6;
    const initState = puzzleArr.map(line => [...line]);
    const boxSize = cycleCount * 2 + initState.length * 2;

    console.log(boxSize);

    let prevBox: string[][][] = [];
    let curBox = [];

    const emptyBox = Array(boxSize).fill('').map(() => Array(boxSize).fill('').map(() => Array(boxSize).fill('.')))
    curBox = [...emptyBox]

    const halfSize = Math.floor(boxSize / 2);
    for (let i = 0; i < initState.length; i++) {
      for (let j = 0; j < initState[i].length; j++) {
        curBox[halfSize][halfSize + i][halfSize + j] = initState[i][j]
      }
    }

    for (let i = 0; i < cycleCount; i++) {
      prevBox = [...curBox];

      curBox = prevBox.map((xArr, x1) => {
        return xArr.map((yArr, y1) => {
          return yArr.map((status, z1) => {
            let activeNeighborCount = 0;
            for (const x2 of [-1, 0, 1]) {
              for (const y2 of [-1, 0, 1]) {
                for (const z2 of [-1, 0, 1]) {
                  if ([x2, y2, z2].every(n => n === 0)) {
                    continue;
                  }
                  if (prevBox[x1 + x2]) {
                    if (prevBox[x1 + x2][y1 + y2]) {
                      if (prevBox[x1 + x2][y1 + y2][z1 + z2] === '#') {
                        activeNeighborCount++;
                      }
                    }
                  }

                }
              }
            }
            switch (status) {
              case '#':
                return [2, 3].includes(activeNeighborCount) ? '#' : '.'
              case '.':
                return activeNeighborCount === 3 ? '#' : '.'
            }
          })
        })
      })
    }

    return curBox.join('').match(/#/g).length
  }())
  console.log('part1', answer1);

  const answer2 = (function () {
    const cycleCount = 6;
    const initState = puzzleArr.map(line => [...line]);
    const boxSize = cycleCount * 2 + initState.length * 2;

    console.log(boxSize);

    let prevBox: string[][][][] = [];
    let curBox = [];

    const emptyBox = Array(boxSize).fill('').map(() => Array(boxSize).fill('').map(() => Array(boxSize).fill('.').map(() => Array(boxSize).fill('.'))))
    curBox = [...emptyBox]

    const halfSize = Math.floor(boxSize / 2);
    for (let i = 0; i < initState.length; i++) {
      for (let j = 0; j < initState[i].length; j++) {
        curBox[halfSize][halfSize][halfSize + i][halfSize + j] = initState[i][j]
      }
    }

    for (let i = 0; i < cycleCount; i++) {
      console.log(`cycle ${i}`)
      prevBox = [...curBox];

      curBox = prevBox.map((xArr, x1) => {
        return xArr.map((yArr, y1) => {
          return yArr.map((zArr, z1) => {
            return zArr.map((status, w1) => {
              let activeNeighborCount = 0;
              for (const x2 of [-1, 0, 1]) {
                for (const y2 of [-1, 0, 1]) {
                  for (const z2 of [-1, 0, 1]) {
                    for (const w2 of [-1, 0, 1]) {
                      if ([x2, y2, z2, w2].every(n => n === 0)) {
                        continue;
                      }
                      if (prevBox[x1 + x2]) {
                        if (prevBox[x1 + x2][y1 + y2]) {
                          if (prevBox[x1 + x2][y1 + y2][z1 + z2]) {
                            if (prevBox[x1 + x2][y1 + y2][z1 + z2][w1 + w2] === '#') {
                              activeNeighborCount++;
                            }
                          }

                        }
                      }
                    }
                  }
                }
              }
              switch (status) {
                case '#':
                  return [2, 3].includes(activeNeighborCount) ? '#' : '.'
                case '.':
                  return activeNeighborCount === 3 ? '#' : '.'
              }
            })
          })
        })
      })
    }
    // console.log(curBox);

    return curBox.join('').match(/#/g).length

  }())
  console.log('part2', answer2);

  console.timeEnd();
}

day17()