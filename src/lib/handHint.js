import anime from 'animejs';

// need some reworks, don`t use without testing!!!!!
const handHint = {
  opt: {
    item: document.querySelector('#handHint'),
    animation: null,
    startTop: '120%',
    startLeft: '120%',
    duration: 400,
  },
  show({ element }) {
    const { opt } = this;
    if (!element.getAttribute('data-hand')) {
      element.setAttribute('data-hand', true);
      const handDOM = opt.item;
      const positionHand = handDOM.getBoundingClientRect();

      const { top, left } = this.getElementPosition(element);


      anime({
        targets: handDOM,
        top: [
          { value: positionHand.top, duration: 0 },
          { value: `${top}px`, duration: opt.duration, easing: 'easeInOutQuad' },
        ],
        left: [
          { value: positionHand.left, duration: 0 },
          { value: `${left}px`, duration: opt.duration, easing: 'easeInOutQuad' },
        ],
        opacity: 1,
        complete() {
        },
      });
      this.animation = this.animateHand();
    }
  },

  hide() {
    const hand = this.item;
    hand.style.opacity = '0';
    hand.style.left = this.opt.startTop;
    hand.style.top = this.opt.startLeft;
    anime.remove(this.item);
  },

  animateHand() {
    //  css animation :
    // document.getElementById('handHint').setAttribute('data-anime', true);

    // anime.js animation :
    anime({
      targets: this.opt.item,
      rotate: [{ value: -30, duration: 0 }],
      translateX: [
        { value: 0, duration: 0 },
        { value: 10, duration: 900, easing: 'easeInOutQuad' },
      ],
      translateY: [
        { value: 0, duration: 0 },
        { value: 10, duration: 900, easing: 'easeInOutQuad' },
      ],
      direction: 'alternate',
      loop: true,
    });
  },

  getElementPosition(element) {
    let margin = 15;
    if (element.getAttribute('id') === 'spinBtn') {
      margin = 0;
    }
    const positionCard = element.getBoundingClientRect();
    const positionTop = positionCard.top + positionCard.height + margin;
    const positionLeft = positionCard.left + positionCard.width + margin;
    return { top: positionTop, left: positionLeft };
  },

};

export default handHint;
