function day13() {
  console.time();

  const puzzle = `1015292
  19,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,x,743,x,x,x,x,x,x,x,x,x,x,x,x,13,17,x,x,x,x,x,x,x,x,x,x,x,x,x,x,29,x,643,x,x,x,x,x,37,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,23`;

  const puzzle2 = `939
  7,13,x,x,59,x,31,19`

  const puzzle3 = `11111
  17,x,13,19`

  const puzzle4 = `11111
  67,7,59,61`

  const puzzle5 = `111111
  1789,37,47,1889`

  const puzzle6 = `11111
  67,7,x,59,61`

  const puzzleArr = puzzle.split('\n')

  // part1
  const answer1 = (function () {
    const [startTime, bus] = puzzleArr;
    const busList = bus.split(',').filter(busId => busId !== 'x');
    
    let time = +startTime;
    let earliestBusId;
    while(!earliestBusId) {
      time++;
      earliestBusId = busList.find(busId => {
        return time % +busId === 0;
      })
    }
    // console.log(time, earliestBusId)
    return +earliestBusId * (time - +startTime);
  }())
  console.log('part1', answer1)

  // part2
  const answer2 = (function () {
    const [_, bus] = puzzleArr;
    const busList = bus.split(',');
    const firstBusId = +busList[0];
    // const maxBusId = Math.max(...busList.filter(id => id !== 'x').map(id => +id));
    
    let time = 0;

    while(true) {
      time += firstBusId;
      // console.log(time);
      
      const isOk = busList.slice(1).every((busId, index) => {
        if (busId === 'x') {
          return true;
        }
        return +busId - (time % +busId) === index + 1;
      });

      if (isOk) {
        return time;
      }

    }

  }())
  console.log('part2', answer2)

  console.timeEnd();
}

day13();