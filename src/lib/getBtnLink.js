import getOS from './getOS';

import {
  IOS_LINK, ANDROID_LINK, PC_LINK, ANDROID, IOS,
} from '../../constants';

const getBtnLink = () => new Promise((resolve) => {
  const addInstallBtnHandlerAppLovin = (os) => {
    let link = '';
    if (os === IOS) {
      link = IOS_LINK;
    } else if (os === ANDROID) {
      link = ANDROID_LINK;
    } else {
      link = PC_LINK;
    }

    resolve(link);
  };

  const checkOSForInstallBtn = async () => {
    const OS = await getOS();
    addInstallBtnHandlerAppLovin(OS);
  };
  // add install links for AppLovin or Unity
  // to start uncomment next function
  checkOSForInstallBtn();
});

export default getBtnLink;
