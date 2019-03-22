
const setPrefix = ({ elem, propertyCss, value }) => {
  const elemDOM = elem;
  elemDOM.style[`-webkit-${propertyCss}`] = value;
  elemDOM.style[`-moz-${propertyCss}`] = value;
  elemDOM.style[`-ms-${propertyCss}`] = value;
  elemDOM.style[`-o-${propertyCss}`] = value;
  elemDOM.style[propertyCss] = value;
};

export default setPrefix;
