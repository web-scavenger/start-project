import randomInteger from '../randomInteger';

const generateReelCombinations = (icons, winArray, oneSpinLength, startArr) => {
  const rowsCombination = [];
  const iconsLength = icons.length;
  const rowsCount = winArray[0][0].length;
  const stopsCount = winArray.length;
  let currentWinRow;
  let currentstartRow;

  // Pushing empty arrays for every row (icons inside)
  for (let i = 0; i < rowsCount; i++) {
    rowsCombination.push([]);
  }

  for (let stopI = 0; stopI < stopsCount; stopI++) {
    // Setting start combinations (optional)
    if (startArr[stopI]) {
      currentstartRow = startArr[stopI];
      for (let rowI = 0; rowI < rowsCount; rowI++) {
        // eslint-disable-next-line no-restricted-syntax
        for (const startArr of currentstartRow) {
          rowsCombination[rowI].push(startArr[rowI]);
        }
      }
    }

    // Setting random combinations
    for (let i = 0; i < oneSpinLength; i++) {
      for (let rowI = 0; rowI < rowsCount; rowI++) {
        rowsCombination[rowI].push(icons[randomInteger(0, iconsLength - 1)]);
      }
    }
    // Setting win combinations
    currentWinRow = winArray[stopI];
    for (let rowI = 0; rowI < rowsCount; rowI++) {
      // eslint-disable-next-line no-restricted-syntax
      for (const winIcon of currentWinRow) {
        rowsCombination[rowI].push(winIcon[rowI]);
      }
    }
  }

  // Adding 1 icon to end of array and reverse it
  for (const combo of rowsCombination) {
    combo.push(icons[randomInteger(0, iconsLength - 1)]);
    combo.reverse();
  }
  return rowsCombination;
};

export default generateReelCombinations;
