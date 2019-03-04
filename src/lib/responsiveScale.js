export const getPageScale = (psdWidth, windowWidth, windowHeight) => {
  const scale = windowWidth / psdWidth;
  const tabletScale = windowWidth / windowHeight >= 0.623 ? windowHeight * 0.623 / psdWidth : scale;
  return { scale, tabletScale };
};

export const setScaleForItems = (items, scale) => {
  if (items.length > 0) {
    items.map((item) => {
      const scaleValue = scale.tabletScale;
      if (typeof item !== 'object') document.getElementById(item).style.transform = `scale(${scale.tabletScale})`;
      else {
        const modifiedScale = item.scale ? scaleValue * item.scale : scaleValue;
        if (item.items && item.items.length > 0) {
          const childItems = item.items;
          childItems.forEach((childItem) => {
            childItem.style.transform = `scale(${modifiedScale})`;
          });
        } else {
          item.items.style.transform = `scale(${modifiedScale})`;
        }
      }
    });
  }
};
