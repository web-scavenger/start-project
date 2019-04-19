const copyrightStyle = `
.copyrights {
  font-family: 'Lato', sans-serif;
  width: 100%;
  height: 5%;
  position: absolute;
  bottom: 0;
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.8)));
  background-image: -webkit-linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  background-image: -o-linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  z-index : 9999;
}
.copyrights div {
  width: 100%;
  height: 100%;
  color: #ffffff;
  font-size: 1.12em;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: relative;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.copyrights div p,
.copyrights div img {
  margin-top: 20px;
  position: relative;
}
.copyrights div p {
  white-space: nowrap;
  margin-left: 10px;
}
.copyrights div img {
  margin-left: 3px;
}
`;

export default copyrightStyle;
