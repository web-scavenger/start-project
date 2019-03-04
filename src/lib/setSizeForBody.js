export const setSizeForBody = (item) => {
  const windowSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  let elemScale = windowSize.width / item.width;
  if (elemScale * item.height >= windowSize.height) elemScale = windowSize.height / item.height;

  const { elem } = item;
  const { body } = document;

  elem.style.transform = `scale(${elemScale})`;
  body.style.width = `${windowSize.width}px`;
  body.style.height = `${windowSize.height}px`;
};