export default function gridData() {
  console.log("the randomize was triggered");
  let array = [
    { value: 1, visible: false, correct: false },
    { value: 1, visible: false, correct: false },
    { value: 2, visible: false, correct: false },
    { value: 2, visible: false, correct: false },
    { value: 3, visible: false, correct: false },
    { value: 3, visible: false, correct: false },
    { value: 4, visible: false, correct: false },
    { value: 4, visible: false, correct: false },
    { value: 5, visible: false, correct: false },
    { value: 5, visible: false, correct: false },
    { value: 6, visible: false, correct: false },
    { value: 6, visible: false, correct: false },
    { value: 7, visible: false, correct: false },
    { value: 7, visible: false, correct: false },
    { value: 8, visible: false, correct: false },
    { value: 8, visible: false, correct: false },
  ];
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  console.log(array);
  return array;
}
