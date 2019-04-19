
const initAudio = ({ name, audioDataUrl, loop }) => new Promise((resolve, reject) => {
  const appBlock = document.getElementById('home');
  const audio = document.createElement('audio');

  const createVirtualBtn = () => {
    const virtulaStartBtn = document.createElement('div');
    virtulaStartBtn.setAttribute('id', 'virtulaStartBtn');
    appBlock.appendChild(virtulaStartBtn);
    return virtulaStartBtn;
  };

  const startBtn = createVirtualBtn();


  const startPlay = () => {
    const obj = {};
    obj.name = name;
    obj.dataDOM = audio;
    resolve(obj);
  };

  const initEvents = () => {
    audio.addEventListener('canplaythrough', () => {
      startBtn.click();
    }, false);
    startBtn.addEventListener('click', startPlay.bind(this), false);
  };

  const init = () => {
    audio.setAttribute('playsinline', '');
    audio.setAttribute('webkit-playsinline', '');
    audio.setAttribute('muted', '');
    if (loop) {
      audio.loop = true;
    }
    audio.muted = true;

    const sourceMP4 = document.createElement('source');
    sourceMP4.type = 'audio/mpeg';
    if (audio.canPlayType('audio/mpeg')) {
      audio.setAttribute('src', audioDataUrl);
      audio.load();
    }
    appBlock.appendChild(audio);
    initEvents();
  };


  init();
});

export default initAudio;
