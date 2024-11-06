{
    const sumArray = (numbers:number[]):number=>{
        const sum = numbers.reduce((acc:number,curr:number ):number=> acc + curr, 0)
        return sum
    }
    console.log(sumArray([1, 2, 3, 4,5]))
}