class MathUtil {
    static PI = 3.14159;

    static getDiameter(radius) {
        return radius * 2;
    }

    static getCircumference(radius) {
        return radius * 2 * this.PI;
    }

    static getArea(radius){
        return radius * radius * this.PI
    }
}

// console.log(MathUtil.PI)
// console.log(MathUtil.getDiameter(10))
// console.log(MathUtil.getCircumference(10))
console.log(MathUtil.getArea(10))
