import { StyleSheet } from 'react-native';

import COLOURS from './colors';
import CONSTANTS from './constants';

export default StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  flexGrowOne: {
    flexGrow: 1,
  },
  flex07: {
    flex: 0.7
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyFlexStart: {
    justifyContent: 'flex-start',
  },
  justifyFlexEnd: {
    justifyContent: 'flex-end',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignItemsFlexEnd: {
    alignItems: 'flex-end',
  },
  alignItemsFlexStart: {
    alignItems: 'flex-start',
  },
  alignContentStart: {
    alignContent: 'flex-start',
  },
  alignContentCenter: {
    alignContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  overFlow: {
    overflow: 'hidden',
  },
  alignSelfFlexEnd: {
    alignSelf: 'flex-end',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  // height
  height24: {
    height: CONSTANTS.Width24,
  },
  height40: {
    height: CONSTANTS.Width40
  },
  
  // full width
  Width24: {
    width: CONSTANTS.Width24,
  },
  width312: {
    width: CONSTANTS.width312,
  },
  FullWidth: {
    width: CONSTANTS.FullWidth,
  },

  // margin
  margin12: {
    margin: CONSTANTS.Width12,
  },

  // border
  borderWidth1: {
    borderWidth: StyleSheet.hairlineWidth
  },

  // padding 
  padding10: {
    padding: 10,
  },
  paddingVertical10: {
    paddingVertical: CONSTANTS.Width10,
  },
  paddingHorizontal16: {
    paddingHorizontal: CONSTANTS.Width16
  },
  paddingVertical16: {
    paddingVertical: CONSTANTS.Width16
  },
  paddingBottom24: {
    paddingBottom: CONSTANTS.Width24
  },
  paddingLeft24: {
    paddingLeft: CONSTANTS.Width24
  },

  // margin top
  marginBottom8: {
    marginBottom: CONSTANTS.Width8
  },
  marginTop22: {
    marginTop: CONSTANTS.Width22
  },
  marginLeft16: {
    marginLeft: CONSTANTS.Width16
  },

  // color black
  colorBlack: {
    color: COLOURS.BLACK,
  },
  colorWhite: {
    color: COLOURS.WHITE,
  },
  colorAzureRadiance: {
    color: COLOURS.AZURE_RADIANCE,
  },

  // background color
  backgroundColorBlueGem: {
    backgroundColor: COLOURS.BLUE_GEM
  },
  backgroundColorWhite: {
    backgroundColor: COLOURS.WHITE
  },
  backgroundColorAzureRadiance: {
    backgroundColor: COLOURS.AZURE_RADIANCE,
  },

  // border radius
  borderRadius5: {
    borderRadius: CONSTANTS.Width5
  },

  // fontsize
  fontSize20: {
    fontSize: CONSTANTS.Width20
  },

  // max width
  maxWidth210: {
    maxWidth: CONSTANTS.Width210
  },

  borderColorBlack: {
    borderColor: COLOURS.BLACK,
  },
});