function day22() {
  console.time();

  const puzzle = `Player 1:
38
39
42
17
13
37
4
10
2
34
43
41
22
24
46
19
30
50
6
44
28
27
36
5
45

Player 2:
31
40
25
11
3
48
16
9
33
7
12
35
49
32
26
47
14
8
20
23
1
29
15
21
18`

  const puzzle2 = `Player 1:
9
2
6
3
1

Player 2:
5
8
4
7
10`;

const puzzle3 = `Player 1:
43
19

Player 2:
2
29
14`

  const [player1, player2] = puzzle.split('\n\n').map(s => s.replace(/Player (\d):\n/g, '').split('\n'))

  const answer1 = (function () {
    let round = 1;
    const p1 = [...player1];
    const p2 = [...player1];

    while (p1.length && p2.length) {
      // console.log(`== Round ${round} ==`)
      // console.log(`Player 1's deck: ${player1.join(",")}`)
      // console.log(`Player 2's deck: ${player2.join(",")}`)

      const card1 = p1.shift();
      const card2 = p2.shift();

      // console.log(`Player 1 plays: ${card1}`)
      // console.log(`Player 2 plays: ${card2}`)
      // console.log(`Player ${card1 > card2 ? 1 : 2} wins the round!`)

      if (+card1 > +card2) {
        p1.push(card1)
        p1.push(card2)
      } else {
        p2.push(card2)
        p2.push(card1)
      }

      round++;
    }


    return [...p1, ...p2].reduce((sum, cur, index, arr) => {
      return sum += (+cur * (arr.length - index))
    }, 0)
  }())
  console.log('part1', answer1);

  const answer2 = (function () {
    function subGame(player1: string[], player2: string[], game = 1) {
      let round = 1;
      const p1Set = new Set();
      const p2Set = new Set();

      while (player1.length && player2.length) {
        if (p1Set.has(player1.join(',')) || p2Set.has(player2.join(','))) {
          player2 = [];
          return [player1, player2]
        }

        p1Set.add(player1.join(','))
        p2Set.add(player2.join(','))

        // console.log(`Game ${game}: Round ${round}`);
        // console.log('player1', player1.join(','))
        // console.log('player2', player2.join(','))
        // console.log('')

        const card1 = player1.shift();
        const card2 = player2.shift();
        
        let winner = ''
        if (+card1 <= player1.length && +card2 <= player2.length) {
          game += 1;
          const [p1] = subGame(player1.slice(0, +card1), player2.slice(0, +card2), game)
          winner = p1.length ? 'player1' : 'player2';
        } else {
          winner = +card1 > +card2 ? 'player1' : 'player2';
        }

        if (winner === 'player1') {
          player1.push(card1)
          player1.push(card2)
        } else {
          player2.push(card2)
          player2.push(card1)
        }

        round++;
      }

      return [player1, player2];
    }

    const [p1, p2] = subGame(player1, player2)
    return [...p1, ...p2].reduce((sum, cur, index, arr) => {
      return sum += (+cur * (arr.length - index))
    }, 0)
  }())
  console.log('part2', answer2);

  console.timeEnd();
}

day22()