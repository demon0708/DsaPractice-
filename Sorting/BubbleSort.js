const array = [243, 45, 23, 356, 3, 5346, 35, 5]

const bubbleSort = (array) => {
  const arrayLength = array.length;
  for (let i = 0; i < arrayLength; i++) {
    console.log("===>i", i);
    for (let j = 0; j < arrayLength- i - 1;j++) {
      console.log("j", j, "i", i);
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

console.log(bubbleSort(array));
