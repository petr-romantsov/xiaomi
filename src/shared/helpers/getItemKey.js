export const getItemKey = (...args) => {
  const itemKey = args
    .filter((item) => item !== null)
    .map(String)
    .join('-');
  return itemKey;
};
