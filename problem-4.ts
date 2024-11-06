{
  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  type Shape = Circle | Rectangle;

  // Type Guard

  const typeCircle = (shape: Shape): shape is Circle =>
    shape.shape === "circle";

  const typeRectange = (shape:Shape) : shape is Rectangle => shape.shape === "rectangle"

  const calculateShapeArea = (input: Shape): number => {
    let area:number;
    if (typeCircle(input)) {
      const radius = input.radius;
      area = Math.PI * radius * radius;
    }
    if(typeRectange(input)){
        area = input.height * input.width
    }

    return area
  };

  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  console.log(circleArea)

  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  console.log(rectangleArea)
}
