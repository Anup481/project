import React from 'react';
import { StatusBar } from 'react-native';

export default function Statusbar(props) {
  return (
    <StatusBar
      animated={true}
      hidden={false}
      translucent={true}
      barStyle={'light-content'}
      backgroundColor={'rgba(0, 0, 0, 0.2)'}
    />
  );
}