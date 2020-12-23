function day23() {
  console.time();

  const puzzle = `459672813`

  const puzzle2 = `389125467`;

  const puzzleArr = puzzle.split('').map(s => +s)

  const answer1 = (function () {
    const circle = [...puzzleArr];

    let move = 0;
    let cupIndex = 0;
    while (move < 100) {
      const index = cupIndex % circle.length;
      const currentCup = circle[index];

      let pickupCups: number[] = [];
      for (let i = index + 1; i < index + 4; i++) {
        pickupCups.push(circle[i % circle.length])
      }
      pickupCups.forEach(num => {
        circle.splice(circle.findIndex(num2 => num === num2), 1)
      })


      let destination: number;
      let minus = 1;
      while (!destination) {
        if (currentCup === Math.min(...circle)) {
          destination = Math.max(...circle)
          break;
        }
        destination = circle.find(num => num === currentCup - minus)

        minus++;
      }

      const selectedIndex = circle.findIndex(num => num === destination);
      // console.log(`-- move ${move + 1} --`)
      // console.log(`cups: ${circle.map((n) => n === currentCup ? `(${n})` : n).join(' ')}`)
      // console.log(`pick up: ${pickupCups.join(', ')}`)
      // console.log(`destination: ${destination}`)


      pickupCups.forEach((num, index) => {
        circle.splice(selectedIndex + 1 + index, 0, num)
      })
      // console.log(`result: ${circle.join(' ')}`)
      // console.log(``)

      move++;
      cupIndex = circle.findIndex(num => num === currentCup) + 1
    }

    const firstIndex = circle.findIndex(num => num === 1) + 1;
    return Array(circle.length - 1).fill('').map((_, i) => circle[(firstIndex + i) % circle.length]).join('');
  }())
  console.log('part1', answer1);

  const answer2 = (function () {
    interface Cup {
      value: number
      next: Cup
    }

    const max = Math.max(...puzzleArr) + 1;
    const cups: Cup[] = [...puzzleArr, ...Array(1000000 - puzzleArr.length).fill('').map((_, i) => i + max)]
      .map(value => {
        return {
          value,
          next: undefined
        }
      })

    cups.forEach((_, index) => {
      cups[index].next = cups[(index + 1) % cups.length];
    })

    const map = new Map<number, Cup>();
    cups.forEach((item) => map.set(item.value, item));

    let currentCup = cups[0];
    for (let move = 0; move < 10000000; move++) {

      let pickupCups: number[] = [currentCup.next.value, currentCup.next.next.value, currentCup.next.next.next.value];
      const pickupCupFirst = currentCup.next;
      currentCup.next = currentCup.next.next.next.next;


      let minus = currentCup.value - 1;
      while (true) {
        while (pickupCups.includes(minus))  minus--;

        if (minus === 0) minus = cups.length;

        while (pickupCups.includes(minus)) minus--;

        const pos = map.get(minus);
        if (pos) {
          pickupCupFirst.next.next.next = pos.next;
          pos.next = pickupCupFirst;
          break;
        }

        minus--;
      }

      currentCup = currentCup.next;
    }
    
    return map.get(1).next.value * map.get(1).next.next.value
  }())
  console.log('part2', answer2);

  console.timeEnd();
}

day23()