/* eslint-disable guard-for-in */
import { Howl } from 'howler';
import * as audioData from '../../audio_settings/audioData';


const soundsArr = {};

const soundLogo = document.getElementById('soundLogo');


// eslint-disable-next-line no-restricted-syntax
for (const key in audioData) {
  let loop = false;
  if (key === 'mainTheme') loop = true;

  soundsArr[key] = {
    name: [key],
    src: audioData[key],
    loop,
  };
}

const mainTheme = new Howl({
  src: soundsArr.mainTheme.src,
  html5: false,
  format: ['mp3'],
  webAudio: true,
  loop: soundsArr.mainTheme.loop,
});

const allSounds = { mainTheme };

const unmuteAudio = () => {
  // eslint-disable-next-line no-restricted-syntax
  for (const key in allSounds) {
    if (allSounds[key].loop) allSounds[key].mute(false);
  }
};

const muteAudio = () => {
  // eslint-disable-next-line no-restricted-syntax
  for (const key in allSounds) {
    allSounds[key].mute(true);
  }
};

const soundLogoToggle = (state) => {
  soundLogo.setAttribute('data-turn', state);
};

const changeSoundMode = () => {
  const currentState = soundLogo.getAttribute('data-turn');
  if (currentState === 'false') {
    unmuteAudio();
    soundLogoToggle(true);
  } else {
    muteAudio();
    soundLogoToggle(false);
  }
};

const changeModeHandler = () => {
  soundLogo.onclick = () => { changeSoundMode(); };
};


export {
  mainTheme, muteAudio, unmuteAudio, changeModeHandler, changeSoundMode,
};
