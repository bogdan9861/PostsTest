export const reduceString = (str = "", max) => {
  return str.length > max ? `${str.substring(0, max)}...` : str;
};
