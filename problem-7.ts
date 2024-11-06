{
  class Car {
    constructor(
      public make: string,
      public model: string,
      public year: number
    ) {}

    getCarAge(){
        const year = new Date().getFullYear()
        console.log(`${year-this.year} (assuming current year is ${year})`)
        return `${year-this.year} (assuming current year is ${year})`
    }
  }
  const car = new Car("Honda", "Civic", 2018);
car.getCarAge();
}
