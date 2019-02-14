export const getPageScale = (psdWidth, windowWidth, windowHeight) => {
    let scale = windowWidth / psdWidth;
    let tabletScale = windowWidth / windowHeight >= 0.623 ? windowHeight * 0.623/ psdWidth : scale;
    return {scale, tabletScale};
};

export const setScaleForItems = (items, scale) => {
    if (items.length > 0) {
        items.map(item => {
            let scaleValue = scale.tabletScale;
            if (typeof item !== 'object') document.getElementById(item).style.transform = 'scale('+scale.tabletScale+')';
            else {
                let modifiedScale = item.scale ? scaleValue * item.scale : scaleValue;
                if (item.items && item.items.length > 0) {
                    let childItems = item.items;
                    childItems.forEach(childItem => {
                        childItem.style.transform = `scale(${modifiedScale})`;
                    });
                } else {
                    item.items.style.transform = `scale(${modifiedScale})`;
                }
            }
        });
    }
};