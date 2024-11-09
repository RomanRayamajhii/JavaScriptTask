// mainfile.js
export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

export const PI = 3.14;

export function getArea(radius) {
    return PI * Math.pow(radius, 2);
}

export function getCircumference(radius) {
    return 2 * PI * radius;
}
