const audioPlay = {
  canPlayAudio: false,
  audioDOM: null,
  canChangeAudioMode: true,
  soundLogo: document.getElementById('soundLogo'),
  sound: false,
  startPlay(name) {
    const self = this;
    const audio = this.audioDOM.find(element => element.name === name);
    audio.dataDOM.currentTime = 0;

    if (this.canPlayAudio) {
      // this.canPlayAudio = false;
      const playPromise = audio.dataDOM.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          if (!self.sound && self.canChangeAudioMode) {
            self.changeSoundMode();
            self.canChangeAudioMode = false;
          }
        })
          .catch((error) => {
            console.log(error);
            throw new Error(error);
          });
      }
    }
  },
  changeSoundMode() {
    this.audioDOM.forEach((element) => {
      element.dataDOM.muted = this.sound;
    });
    // audio.muted = this.sound;
    this.sound = !this.sound;
    this.soundLogo.setAttribute('data-turn', this.sound);
  },
  changeModeHandler() {
    this.soundLogo.onclick = () => { this.changeSoundMode(); };
  },
};

export default audioPlay;
