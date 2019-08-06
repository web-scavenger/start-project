import { ANDROID, IOS, PC } from '../../constants';

const getOS = () => {
  const BrowserDetect = {
    dataOS: [
      {
        fullInfo: window.navigator.userAgent,
        subName: 'iPhone',
        osName: IOS,
      },
      {
        fullInfo: window.navigator.userAgent,
        subName: 'Android',
        osName: ANDROID,
      },
    ],
    searchOS(data) {
      return new Promise((res) => {
        data.forEach((element, index) => {
          const { fullInfo, subName, osName } = data[index];
          if (element) {
            if (fullInfo.indexOf(subName) !== -1) res(osName);
          }
        });
        res(null);
      });
    },
    init() {
      return new Promise(async (res) => {
        this.OS = await this.searchOS(this.dataOS) || PC;
        res(this.OS);
      });
    },

  };

  return new Promise((res) => {
    const OS = BrowserDetect.init();
    res(OS);
  });
};

export default getOS;
