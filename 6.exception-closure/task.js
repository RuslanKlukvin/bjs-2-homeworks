function parseCount(x) {
    let val = Number.parseFloat(x);
    if (isNaN(val)) {
      throw new Error("Невалидное значение");
    }
    return val;
  }
  
  function validateCount(x) {
    try {
      let val = parseCount(x);
      return val;
    } catch (error) {
      return error;
    }
  }
  
  class Triangle {
    constructor(x, y, z) {
      if (x + y <= z || x + z <= y || y + z <= x) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
      this.x = x;
      this.y = y;
      this.z = z;
    }
  
    get perimeter() {
      return this.x + this.y + this.z;
    }
  
    get area() {
      let p = this.perimeter / 2;
      let s = Math.sqrt(p * (p - this.x) * (p - this.y) * (p - this.z));
      return +s.toFixed(3);
    }
  }
  
  function getTriangle(x, y, z) {
    try {
      return new Triangle(x, y, z);
    } catch (error) {
      return {
        get perimeter() {
          return "Ошибка! Треугольник не существует";
        },
        get area() {
          return "Ошибка! Треугольник не существует";
        },
      };
    }
  }