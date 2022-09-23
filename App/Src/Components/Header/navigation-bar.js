/*
 *   File : navigation-bar.js
 *   Author URI : https://evoqueinnovativelab.com
 *   Description : menu bar
 *   Integrations :
 *   Version : v1.1
 */

import React from 'react';
import { View } from 'react-native';
import { Text, TouchableOpacity, Image } from 'react-native';

// manual import
import { Styles, CONSTANTS, COLORS } from '../../Themes';

export default function NavigationBar(props) {
  return (
    <View style={[Styles.row, Styles.alignItemsCenter]}>
      {/* drawer */}
      <TouchableOpacity
        activeOpacity={CONSTANTS.activeOpacity}
        hitSlop={CONSTANTS.normalHitSlop}
        onPress={() => _drawerOptions()}>
        <Image source= {{}}
        style= {Styles.Width24, Styles.height24} />
      </TouchableOpacity>

      {/* menu bar label */}
      <Text
        style={[
          Styles.colorWhite,
          Styles.marginLeft16,
          Styles.maxWidth210,
        ]}
        numberOfLines={1}
        ellipsizeMode={'tail'}>
        {props.label}
      </Text>
    </View>
  );
}
