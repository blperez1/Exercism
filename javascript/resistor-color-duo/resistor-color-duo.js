//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const decodedValue = (color) => {
  const [firstColor, secondColor] = color;
  return (COLORS.indexOf(firstColor) * 10) + COLORS.indexOf(secondColor); 
};

export const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];