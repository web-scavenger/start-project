import { getPageScale, setScaleForItems } from './lib/responsiveScale';

window.onload = () => {
  const items = [
    
  ];
  const setScaleForAllItems = (scale) => {
    setScaleForItems(
      items,
      scale,
    );
  };

  let scale = getPageScale(640, document.body.clientWidth, document.body.clientHeight);
  setScaleForAllItems(scale);


  window.onresize = () => {
    scale = getPageScale(640, document.body.clientWidth, document.body.clientHeight);
    setScaleForAllItems(scale);
  };

  document.body.style.opacity = '1';
};
