import ResponsiveScale from './lib/ResponsiveScale';

window.onload = () => {
  const items = [];
  const scaleItems = new ResponsiveScale({
    items,
    psdWidth: 640,
    ratio: 0.68,
  });

  document.body.style.opacity = '1';
};
