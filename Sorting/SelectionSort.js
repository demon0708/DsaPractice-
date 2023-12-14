const array = [7,8,3,1,2];

const selectionsort = (array) => {
  const arrayLength = array.length;

  for (let i = 0; i < arrayLength - 1; i++) {
    console.log("i", array[i]);
    console.log('===>',array)
    for (let j = i + 1; j < arrayLength; j++) {
      console.log("i", array[i], "j", array[j]);
      if (array[i] > array[j]) {
        let tem = array[i];
        array[i] = array[j];
        array[j] = tem;
        console.log('===>',array)
      }
    }
  }
  return array;
};

console.log(selectionsort(array));
