export const DatetoString = (stdate: string): string => {
  const date = new Date(stdate);
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
};
