//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (n) => {
    let numArr = [...n.toString()]
    let product = numArr.reduce((acc, num) => Math.pow(Number(num), numArr.length) + acc, 0)
    return product === n;  
};

