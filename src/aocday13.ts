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
    while (!earliestBusId) {
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

    function getGcd(a: number, b: number) {
      let t = 0;
      a < b && (t = b, b = a, a = t); // swap them if a < b
      t = a % b;
      return t ? getGcd(b, t) : b;
    }

    function getLcm(a: number, b: number) {
      return a / getGcd(a, b) * b;
    }
  
    let num = busList.map((busId, index, arr) => {
      if (busId === 'x' || index === 0) {
        return 0;
      }
      // console.log(busId, index)
      
      const id = +busId;
      const lcm = arr.filter(id => id !== 'x' && id !== busId).map(id => +id).reduce(getLcm);

      
      
      let i = 0;
      const remainder = id- (index % id);
      console.log(`x = ${remainder} (mod ${id}), index: ${index}`);
      while (true) {
        if ((lcm * i - remainder) % id === 0) {
          // console.log(`${remainder}, ${lcm} x ${i} = ${lcm*i}, ${Number.isSafeInteger(lcm * i)}`)
          return lcm * i;
        }
        i++;
      }


    }).reduce((sum, cur) => sum += cur, 0)

    
    const lcm = busList.filter(id => id !== 'x').reduce((sum, cur) => sum *= +cur, 1);

    return num % lcm;
    
    // function chineseRemainderTheorem(busIds: number[]) {
    //   let idMap = new Map<number, number>()
    //   for (const [index, id] of busIds.slice(1).entries()) {
    //     if (!id) {
    //       continue
    //     }
    //     idMap.set(id, index + 1)
    //   }
    //   console.log(idMap)
   
    //   let theLCM = busIds.filter(id => id).reduce(getLcm)
    //   let sumOfMultipleInverse = 0

    //   for (let [id, index] of idMap.entries()) {
    //     // x === index ( mod id )
    //     const mLCM = theLCM / id
    //     index = index % id

    //     let multipleInverse = 1
    //     while(true) {
    //       if ((mLCM * multipleInverse) % id === (id - index)) {
    //         sumOfMultipleInverse += (mLCM * multipleInverse)
    //         console.log(`x = ${id - index} (mod ${id}), index: ${index}`);
    //         break
    //       }
    //       ++multipleInverse
    //     }
    //   }
  
    //   return sumOfMultipleInverse % theLCM
    // }

    // return chineseRemainderTheorem(busList.map(s => (isNaN(+s) ? 0 : +s)));



    // let time = 0;
    // let step = +busList[0];

    // busList.forEach((busId, index) => {
    //   if (busId === 'x' || index === 0) {
    //     return;
    //   }

    //   while (true) {
    //     if ((time + index) % +busId === 0) {
    //       step *= +busId
    //       break
    //     }
    //     time += step
    //   }
    // }) 
    // return time; 
  }())
  console.log('part2', answer2)

  console.timeEnd();
}

day13();