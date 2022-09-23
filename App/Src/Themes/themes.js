import { StyleSheet } from 'react-native';

import CONSTANTS from './constants';
import BASE from './base';

export default StyleSheet.create({
  container: {
    ...BASE.flexOne,
    backgroundColor: 'fff',
  },
  flexOne: {
    ...BASE.flexOne,
  },
  flexGrowOne: {
    ...BASE.flexGrowOne,
  },
  flex07: {
    ...BASE.flex07,
  },
  row: {
    ...BASE.row,
  },
  column: {
    ...BASE.column,
  },
  flexWrap: {
    ...BASE.flexWrap,
  },

  spaceBetween: {
    ...BASE.spaceBetween,
  },
  justifyCenter: {
    ...BASE.justifyCenter,
  },
  alignItemsCenter: {
    ...BASE.alignItemsCenter,
  },
  alignItemsFlexStart: {
    ...BASE.alignItemsFlexStart,
  },
  alignContentStart: {
    ...BASE.alignContentStart,
  },
  alignContentCenter: {
    ...BASE.alignContentCenter,
  },
  alignItemsFlexEnd: {
    ...BASE.alignItemsFlexEnd,
  },
  alignSelfFlexEnd: {
    ...BASE.alignSelfFlexEnd,
  },
  justifyFlexEnd: {
    ...BASE.justifyFlexEnd,
  },
  justifyFlexStart: {
    ...BASE.justifyFlexStart,
  },
  center: {
    ...BASE.center,
  },
  overFlow: {
    ...BASE.overFlow,
  },

    // height
  height24: {
    ...BASE.height24,
  },
  height40: {
    ...BASE.height40
  },

  margin12: {
    ...BASE.margin12,
  },

  // border
  borderWidth1: {
    ...BASE.borderWidth1
  },

  // padding 
  padding10: {
    ...BASE.padding10,
  },
  paddingVertical10: {
    ...BASE.paddingVertical10
  },
  paddingHorizontal16: {
    ...BASE.paddingHorizontal16
  },
  paddingVertical16: {
    ...BASE.paddingVertical16
  },
  paddingBottom24: {
    ...BASE.paddingBottom24
  },
  paddingLeft24: {
    ...BASE.paddingLeft24
  },

  // full width
  width312: {
    ...BASE.width312,
  },
  Width24: {
    ...BASE.Width24,
  },
  FullWidth: {
    ...BASE.FullWidth
  },

  // margin
  marginBottom8: {
    ...BASE.marginBottom8
  },
  marginTop22: {
    ...BASE.marginTop22
  },
  marginLeft16: {
    ...BASE.marginLeft16,
  },

  // colors
  colorBlack: {
    ...BASE.colorBlack,
  },
  colorWhite: {
    ...BASE.colorWhite,
  },
  colorAzureRadiance: {
    ...BASE.colorAzureRadiance,
  },

  //background color
  backgroundColorBlueGem: {
    ...BASE.backgroundColorBlueGem
  },
  backgroundColorWhite: {
    ...BASE.backgroundColorWhite
  },
  backgroundColorAzureRadiance: {
    ...BASE.backgroundColorAzureRadiance
  },

  // border radius
  borderRadius5: {
    ...BASE.borderRadius5
  },
  
  // fontsize
  fontSize20: {
    ...BASE.fontSize20,
  },

  // max width
  maxWidth210: {
    ...BASE.maxWidth210,
  },

  // border color black
  borderColorBlack: {
    ...BASE.borderColorBlack
  },
  
});