{
  const countWordOccurrences = (sententce: string, word: string): number => {
    const arrayOfWord: string[] = sententce.split(" ");
    let wordCount: number = 0;
    arrayOfWord.forEach((item) => {
      const convertedItem = item.toLowerCase();
      if (convertedItem.includes(word.toLowerCase())) {
        wordCount = wordCount + 1;
      }
    });
    return wordCount;
  };
  console.log(
    countWordOccurrences(
      "I love typescript",
      "typescript"
    )
  );
}
