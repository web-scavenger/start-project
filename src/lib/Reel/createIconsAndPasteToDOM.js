const createIconsAndPasteToDOM = (combinations, iconHeight, iconsPerRow, countOfSpins, wrapper, prefix, addWrapper) => {
  let topPosition;
  const rows = document.createDocumentFragment();
  const startPosition = (combinations[0].length - iconsPerRow) * iconHeight;
  const stopsPositions = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const rowCombination of combinations) {
    const row = document.createElement('div');
    row.className = prefix;
    const iconsFrag = document.createDocumentFragment();
    topPosition = 0;
    let comboElemIndex = 0;
    // eslint-disable-next-line no-restricted-syntax
    for (const combinationElem of rowCombination) {
      const icon = document.createElement('div');
      icon.className = `reel_icon ${combinationElem}`;
      icon.style.top = `${topPosition}px`;
      iconsFrag.appendChild(icon);

      topPosition += iconHeight;

      // Setting stop positions
      // eslint-disable-next-line no-unused-expressions
      comboElemIndex % ((combinations[0].length - 1) / countOfSpins) === 0 && stopsPositions.length < countOfSpins ? stopsPositions.push(`${-topPosition}px`) : null;
      // eslint-disable-next-line no-plusplus
      comboElemIndex++;
    }
    row.appendChild(iconsFrag);
    row.style.top = `${-startPosition}px`;
    if (addWrapper) {
      const additionalWrapper = document.createElement('div');
      additionalWrapper.className = 'additional_row_wrapper';
      additionalWrapper.appendChild(row);
      rows.appendChild(additionalWrapper);
    } else rows.appendChild(row);
  }
  document.getElementById(wrapper).appendChild(rows);

  return stopsPositions.reverse();
};

export default createIconsAndPasteToDOM;
