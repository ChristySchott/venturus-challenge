/* eslint-disable no-multi-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */

export function mostPickedPlayerFn(stringArray: string[]): string {
  const { length } = stringArray;

  if (length === 0) return '';

  const map = {} as { [key: string]: number };

  let mostCommonElement = stringArray[0];
  let mostCommon = 1;

  for (let i = 0; i < length; i++) {
    const element = stringArray[i];

    map[element] == null ? (map[element] = 1) : map[element]++;

    if (map[element] > mostCommon) {
      mostCommonElement = element;
      mostCommon = map[element];
    }
  }
  return mostCommonElement;
}

export const leastPickedPlayerFn = (stringArray: string[]) => {
  if (!stringArray?.length) return '';

  const map = {} as { [key: string]: number };

  const mapping = stringArray.reduce((current, element: string) => {
    let item: number | undefined = current[element];

    item ? (current[element] = ++item) : (current[element] = item = 1);

    return current;
  }, map);

  const leastCommon = Math.min(...Object.values(mapping));

  const isLeast = ([, v]: [string, number]) => v === leastCommon;

  const key = Object.entries(mapping).find(isLeast);

  return (key || [])[0] || '';
};
