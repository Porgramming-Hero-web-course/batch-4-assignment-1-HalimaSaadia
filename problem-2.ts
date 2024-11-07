{
  const removeDuplicates = (numbers: number[]): number[] => {
    let uniqueNumbers: number[] = [];
    numbers.forEach((num) => {
      if (uniqueNumbers.indexOf(num) === -1) {
        uniqueNumbers.push(num);
      }
    });
    return uniqueNumbers;
  };
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
}
