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

  const home = document.getElementById('home');

  let scale = getPageScale(640, home.clientWidth, home.clientHeight);
  setScaleForAllItems(scale);


  window.onresize = () => {
    scale = getPageScale(640, home.clientWidth, home.clientHeight);
    setScaleForAllItems(scale);
  };

  home.style.opacity = '1';
};
