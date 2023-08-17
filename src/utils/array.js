export const deepClone = (array) => {
  return JSON.parse(JSON.stringify(array));
};

export const findInArray = (idToFind, array) => {
  return array.find((item) => item.id === idToFind);
};
