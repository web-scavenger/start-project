const unity = {
    gameStarted: false,
    initPlayable: null,
    viewableChangeHandler(viewable) {
      // start/pause/resume gameplay, stop/play sounds
  
      if (viewable) {
        if (!unity.gameStarted) {
          if (unity.initPlayable) unity.initPlayable();
          unity.gameStarted = true;
          return true;
        }
      } else {
      // pause
      }
    },
    onSdkReady() {
      mraid.addEventListener('viewableChange', this.viewableChangeHandler);
      // Wait for the ad to become viewable for the first time
      if (mraid.isViewable()) {
        if (unity.initPlayable) unity.initPlayable();
      }
    },
    init() {
      if (mraid.getState() === 'loading') {
        mraid.addEventListener('ready', this.onSdkReady);
      } else {
        this.onSdkReady();
      }
    },
  };
  
  export default unity;
  