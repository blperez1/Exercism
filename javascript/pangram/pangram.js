//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
let alphabet = 'abcdefghijklmnopqrstuvwxyz';

export const isPangram = (str) => {
  return [...alphabet]
          .every(char => str.toLowerCase().indexOf(char) > -1)
};
