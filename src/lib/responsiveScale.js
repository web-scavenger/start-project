export default class ResponsiveScale {
  constructor({ items, psdWidth, ratio }) {
    this.items = items;
    this.psdWidth = psdWidth || 640;
    this.ratio = ratio || 0.68;
    this.init();
  }

  static setItemScale(item, scale) {
    item.style.transform = `scale(${scale})`;
  }

  getPageScale() {
    const scale = window.innerWidth / this.psdWidth;
    const tabletScale = window.innerWidth / window.innerHeight >= this.ratio
      ? (window.innerHeight * this.ratio / this.psdWidth)
      : scale;
    return { scale, tabletScale };
  }

  setItemsScale() {
    const { items } = this; const
      { setItemScale } = ResponsiveScale;
    if (items.length > 0) {
      items.map((item) => {
        const scaleValue = this.getPageScale().tabletScale;
        if (typeof item !== 'object') { setItemScale(document.getElementById(item), scaleValue); } else {
          const modifiedScale = item.scale ? scaleValue * item.scale : scaleValue; const
            childItems = item.items;
          if (childItems && childItems.length > 1) {
            childItems.forEach(childItem => setItemScale(childItem, modifiedScale));
          } else {
            setItemScale(item.items, modifiedScale);
          }
        }
      });
    }
  }

  init() {
    this.setItemsScale();
    window.onresize = () => this.setItemsScale(this.items, this.getPageScale());
  }
}
