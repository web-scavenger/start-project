const setSizeForBody = ({ elem, width, height }) => {
  const windowSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  let elemScale = windowSize.width / width;
  if (elemScale * height >= windowSize.height) elemScale = windowSize.height / height;

  const { body } = document;

  const styles = {
    transform: `scale(${elemScale})`,
    width: `${width}px`,
    height: `${height}px`,
    top: '50%',
    left: '50%',
    marginLeft: `${-width / 2}px`,
    marginTop: `${-height / 2}px`,
  };

  for (const style in styles) {
    elem.style[style] = styles[style];
  }

  body.style.width = `${windowSize.width}px`;
  body.style.height = `${windowSize.height}px`;
};

export default setSizeForBody;
