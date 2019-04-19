import createIconsAndPasteToDOM from './createIconsAndPasteToDOM';
import generateReelCombinations from './generateReelCombinations';

export default class Reel {
  constructor(options) {
    this.wrapper = options.wrapper;
    this.rows = options.rows || 'reel_row';
    this.reelIcons = options.reelIcons;
    this.winCombination = options.winCombination;
    this.startCombination = options.startCombination;
    this.oneSpinLength = options.oneSpinLength || 14;
    this.iconsHeight = options.iconsHeight;
    this.iconsPerRow = options.iconsPerRow || 3;
    this.additionalWrapper = options.additionalWrapper || false;
    this.spinCounter = 0;
    this.renderIcons();
  }

  renderIcons() {
    const reelCombination = generateReelCombinations(this.reelIcons, this.winCombination, this.oneSpinLength, this.startCombination);
    this.stopPositions = createIconsAndPasteToDOM(reelCombination, this.iconsHeight, this.iconsPerRow, this.winCombination.length, this.wrapper, this.rows, this.additionalWrapper);
  }

  spin() {
    const rows = document.querySelectorAll(`.${this.rows}`);
    if (this.spinCounter < this.winCombination.length) {
      rows.forEach(row => row.style.top = this.stopPositions[this.spinCounter]);
      const count = this.spinCounter;
      this.spinCounter++;
      const willSpin = this.spinCounter < this.winCombination.length;
      return { count, willSpin };
    }
  }
}
