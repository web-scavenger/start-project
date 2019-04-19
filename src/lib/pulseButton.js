import anime from 'animejs';

const pulseButton = (options) => {
  if (options.item) {
    const duration = 600;
    const scale = options.scale || 1;
    anime({
      targets: options.item,
      scale: [
        { value: scale, duration: 0 },
        { value: scale * 1.04, duration, easing: 'easeInOutQuad' },
        { value: scale, duration, easing: 'easeInOutQuad' },
      ],
      filter: [
        { value: 'brightness(1)', duration: 0 },
        { value: 'brightness(1.2)', duration: options.filter ? duration : 0, easing: 'easeInOutQuad' },
        { value: 'brightness(1)', duration: options.filter ? duration : 0, easing: 'easeInOutQuad' },
      ],
      loop: options.loop || false,
    });
  }
};

export default pulseButton;
