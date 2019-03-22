import anime from 'animejs';


const setScore = ({
  score, inc, duration, elem,
}) => {
  const userScore = score || 0;
  const scoreInc = userScore + inc || 1;

  // coint counter
  const obj = { charged: userScore };
  function numberWithCommas(x) {
    const parts = x.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }

  anime({
    targets: obj,
    charged: scoreInc,
    round: 1,
    duration: duration || 1000,
    easing: 'linear',
    update() {
      const el = document.querySelector(elem);
      const count = JSON.stringify(obj.charged);
      const formatCount = numberWithCommas(count);
      el.innerHTML = formatCount;
    },
  });
};


export default setScore;

// ======================= SET SCORE ============================
//  gets object {
//   score : start score ( type : number, default : 0),
//   inc : increase on (type : number, default : 1),
//   duration : animation`s duration (type : number, default : 1000),
//   elem : DOM element , ! required !
// }
// Animate score increase with commas every 3 numbers ( example : 1,000,000 )
