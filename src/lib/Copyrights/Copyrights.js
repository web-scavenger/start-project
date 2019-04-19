import copyrightsData from './copyrightsData';
import setPrefix from '../setPrefix';
import copyrightStyle from './copyrightsStyle';

const Copyrights = ({ brandName, scale }) => {
  const { fontLink, playtikaLogo } = copyrightsData;
  const brand = brandName || 'Playtika Ltd';
  const scaleVal = scale || 1;

  const getYear = () => {
    const nowDate = new Date();
    const year = nowDate.getFullYear();
    return year;
  };

  const createTextBlock = () => {
    const p = document.createElement('p');
    const year = getYear();
    p.innerHTML = `©${year} ${brand}. All Rights Reserved.`;
    return p;
  };

  const createImgBlock = () => new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = playtikaLogo;
  });

  const createCopyrightBlock = async () => {
    const textBlock = createTextBlock();
    const logo = await createImgBlock();

    const copyrights = document.createElement('div');
    const copyrightsWrapper = document.createElement('div');

    copyrights.classList.add('copyrights');
    copyrightsWrapper.appendChild(textBlock);

    copyrightsWrapper.appendChild(logo);

    copyrights.appendChild(copyrightsWrapper);
    const value = `scale(${scaleVal})`;
    setPrefix({ elem: copyrightsWrapper, propertyCss: 'transform', value });
    return copyrights;
  };

  const appendFont = () => {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', fontLink);

    document.head.appendChild(
      link,
    );
  };

  const appendStyles = () => {
    document.head.appendChild(
      document.createElement('style'),
    ).textContent = copyrightStyle;
  };

  const appendBlock = (element) => {
    document.body.appendChild(element);
  };


  const add = async () => {
    const block = await createCopyrightBlock();
    appendFont();
    appendStyles();
    appendBlock(block);
  };
  add();
};

export default Copyrights;

// ======================= Copyright ============================
//  gets object {
//   brandName : text between year and logo ( type : string, default : 'Playtika Ltd'),
//   scale : scale for block, have default value = 1,
//   but required for mobile devices (type : number, default : 1), ! required !
// }
//
// Copyrights({ brandName: 'Playtika UK - House of Fun Limited', scale: scaleItems.getPageScale().tabletScale });
