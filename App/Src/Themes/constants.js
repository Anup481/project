import { Dimensions } from 'react-native';

let { height, width } = Dimensions.get('window');

export default {
  Width: width,
  Height: height,

  // width
  Width1: width * (1 / 360),
  Width2: width * (2 / 360),
  Width5: width * (5 / 360),
  Width8: width * (8 / 360),
  Width10: width * (10 / 360),
  Width12: width * (12 / 360),
  Width16: width * (16 / 360),
  Width20: width * (20 / 360),
  Width22: width * (22 / 360),
  Width24: width * (24 / 360),
  Width40: width * (40 / 360),
  Width210: width * (210 / 360),
  width312: width * (312 / 360),

  // special properties
  FullHeight: '100%',
  FullWidth: '100%',
  Height600: height * (600 / 720),
  Height656: height * (656 / 720),
  forceInset: { top: 'always', bottom: 'never' },
  normalHitSlop: { left: 10, right: 10, top: 10, bottom: 10 },

  // active opacity
  activeOpacity: 0.8,
  activeOpacityOne: 1,
};
