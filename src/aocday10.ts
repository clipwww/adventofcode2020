function day10() {
  console.time();

  const puzzle = `47
  61
  131
  15
  98
  123
  32
  6
  137
  111
  25
  28
  107
  20
  99
  36
  2
  97
  88
  124
  138
  75
  112
  52
  122
  78
  46
  110
  41
  64
  63
  16
  93
  104
  105
  91
  27
  45
  119
  14
  1
  65
  62
  118
  37
  79
  77
  19
  71
  35
  130
  69
  5
  44
  9
  48
  125
  136
  103
  140
  53
  126
  106
  55
  129
  139
  87
  68
  21
  85
  76
  31
  113
  12
  100
  24
  96
  82
  13
  70
  72
  86
  26
  117
  58
  132
  114
  40
  54
  133
  51
  92`;

  const puzzle2 = `16
  10
  15
  5
  1
  11
  7
  19
  6
  12
  4`

  const puzzle3 = `
  28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`

  const puzzleArr = puzzle.split('\n').map(s => +s.trim())
  // .sort((a, b) => a > b ? 1 : -1);

  // part1
  const answer1 = (function () {
    const max = Math.max(...puzzleArr);
    let jolt1 = 0;
    let jolt3 = 0;
    let adapter = 0;

    while (adapter < max) {
      const jolt = puzzleArr.filter(num => {
        const jolt = num - adapter;
        return jolt > 0 && jolt <= 3;
      });
      const min = Math.min(...jolt);

      switch (min - adapter) {
        case 1:
          jolt1++;
          break;
        case 3:
          jolt3++;
          break;
      }

      adapter = min;
    }
    jolt3++;

    // console.log({ jolt1, jolt3 })
    return jolt1 * jolt3;
  }())
  console.log('part1', answer1)

  // part2
  const answer2 = [0 ,...puzzleArr, Math.max(...puzzleArr) + 3]
    .sort((a, b) => a > b ? 1 : -1)
    .map((num, i, arr) => arr.slice(i + 1, i + 4).filter(v => v < num + 4).length)
    .reduce((sum, num, i, arr) => {
        // if(i === 0) console.log(arr);
        if (![3,2].includes(arr[i - 1])) {
          switch (num) {
            case 2:
              return sum * 2;
            case 3:
              switch (arr[i + 1]) {
                case 2:
                  return sum * 4;
                case 3:
                  return sum * 7;
              }
          }
        }
  
      return sum;
    }, 1)
  console.log('part2', answer2)

  console.timeEnd();
}

day10();