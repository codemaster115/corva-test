export const isInRange = (value, range) =>
  range[0] <= value && value <= range[1] ? 1 : 0;

export const countInRange = (list, range) =>
  list.reduce((acc, { value }) => (acc += isInRange(value, range)), 0);

export const getBarChartValues = (list, ranges) =>
  ranges.map(range => countInRange(list, range));

export const getBarChartLabels = ranges =>
  ranges.map(range => `${range[0]} - ${range[1]}`);
