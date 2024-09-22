const removeDuplicates = <T>(arr: T[]) =>
  arr.filter((item, index) => arr.indexOf(item) === index);

export default removeDuplicates;
