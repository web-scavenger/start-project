
const arrowHint = {
  opt: {
    startTop: '120%',
    startLeft: '120%',
    duration: 400,
    handDOM: document.querySelector('#arrowHint'),
    elementDOM: null,
    showHand: false,
  },
  show() {
    const self = this;
    const { elementDOM } = this.opt;
    arrowHint.opt.showHand = true;
    if (!elementDOM.getAttribute('data-hand')) {
      elementDOM.setAttribute('data-hand', true);

      const { top, left } = this.getElementPosition(elementDOM);

      return new Promise((res) => {
        self.changePosition({ top, left });
        self.animateHand();
        // self.changeHandRotation(elementDOM);
        res({ animated: true });
      });
    }
  },
  changePosition({ top, left }) {
    const { handDOM } = this.opt;
    handDOM.style.opacity = '1';
    handDOM.style.left = `${left}%`;
    handDOM.style.top = `${top}%`;
  },
  onResize() {
    const { elementDOM } = this.opt;
    if (elementDOM && arrowHint.opt.showHand) {
      const { top, left } = this.getElementPosition(elementDOM);
      this.changePosition({ top, left });
    }
  },
  // optional
  changeHandRotation(element) {
    const { handDOM } = this.opt;
    if (element.getAttribute('class') === 'card bottomCard') {
      handDOM.querySelector('div').setAttribute('data-anime-position', 'bottom');
    } else {
      handDOM.querySelector('div').setAttribute('data-anime-position', 'top');
    }
  },
  animateHand() {
    this.opt.handDOM.setAttribute('data-anime', true);
  },
  getElementPosition(element) {
    const screenWidth = document.getElementById('home').clientWidth;
    const screenHeight = document.getElementById('home').clientHeight;

    const positionCard = element.getBoundingClientRect();
    const positionTop = (
      ((positionCard.top + positionCard.height)
      / screenHeight) * 100)
      + (((positionCard.height / 2)
      / screenHeight) * 100);
    const positionLeft = (
      ((positionCard.left + positionCard.width)
      / screenWidth) * 100)
      + (((positionCard.width * 0.8)
      / screenWidth) * 100);

    return { top: positionTop, left: positionLeft };
  },
  hide() {
    const { handDOM } = this.opt;
    handDOM.style.opacity = '0';
    handDOM.style.left = this.opt.startTop;
    handDOM.style.top = this.opt.startLeft;
    arrowHint.opt.showHand = false;
  },
};

export default arrowHint;
