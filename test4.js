function findOverlapAndNotInclude(intervals) {
  let sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
  sortedIntervals = sortedIntervals.map((e) => (e.length === 1 ? [...e, ...e] : e));
  let overlap = [];
  let notInclude = [];
  let tempEnd = sortedIntervals[0][1];

  if (sortedIntervals[0][0] > 1) notInclude.push([1, sortedIntervals[0][0] - 1]);

  for (let i = 1; i < sortedIntervals.length; i++) {
    const currentInterval = sortedIntervals[i];

    if (currentInterval[0] <= tempEnd) {
      // 重疊的情況
      const overlapStart = currentInterval[0];
      const overlapEnd = Math.min(currentInterval[1], tempEnd);
      if (overlap.length > 0 && overlapStart <= overlap[overlap.length - 1][1] + 1) {
        //overlap本身重疊
        overlap[overlap.length - 1][1] = Math.max(overlapEnd, overlap[overlap.length - 1][1]);
      } else {
        overlap.push([overlapStart, overlapEnd]);
      }
    } else {
      // 未包含的情況
      const notIncludeStart = tempEnd + 1;
      const notIncludeEnd = currentInterval[0] - 1;
      if (notIncludeStart <= notIncludeEnd) notInclude.push([notIncludeStart, notIncludeEnd]);
    }

    tempEnd = Math.max(tempEnd, currentInterval[1]);
  }

  // 處理最後一個區間的情況
  if (tempEnd < 20) notInclude.push([tempEnd + 1, 20]);

  overlap = overlap.map((e) => (e[0] === e[1] ? [e[0]] : e));
  notInclude = notInclude.map((e) => (e[0] === e[1] ? [e[0]] : e));

  return {
    overlap,
    notInclude,
  };
}

const input = [[6, 11], [5, 8], [17, 20], [7], [14, 17]];
const output = findOverlapAndNotInclude(input);
console.log(output);
// Output: { overlap: [[6, 8], [17]], notInclude: [[1, 4], [12, 13]] }
