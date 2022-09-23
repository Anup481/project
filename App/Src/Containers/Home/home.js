import React, { Component, useState, Fragment, useEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { StatusBar } from '../../Components/StatusBar';
import { NavigationBar } from '../../Components/Header';
import { Styles, CONSTANTS, COLORS } from '../../Themes';

import countries from '../../../../Data/countries.json';

export default function Home(props) {
  // navigation
  const navigation = useNavigation();

  // useState variables
  const [selectedCountry, setSelectedCountry] = useState('');
  const [count, setCount] = useState(0);
  const [selectedSountry, setCountry] = useState('');

  // on handle go back
  function _onHandleGoBack() {
    navigation.goBack();
  }

  // handle count
  function _handlecount(country) {
    if (country == selectedCountry) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
    setSelectedCountry(country);
  }

  return (
    <SafeAreaView
      style={[Styles.flexOne, Styles.backgroundColorWhite]}
      forceInset={CONSTANTS.forceInset}>
      {/* status bar */}
      <StatusBar />

      {/* menu bar */}
      <NavigationBar
        label={'Home'}
        hideNavigation={false}
        onPressBack={_onHandleGoBack}
      />

      <View style={[Styles.flexOne, Styles.backgroundColorWhite]}>
        <ScrollView
          bounces={false}
          overScrollMode={'never'}
          keyboardShouldPersistTaps={'always'}
          contentContainerStyle={[Styles.flexGrowOne]}
          showsVerticalScrollIndicator={false}>
          <View
            style={[
              Styles.flex07,
              Styles.paddingHorizontal16,
              Styles.marginTop22,
            ]}>
            {/*  */}
            <FlatList
              data={countries}
              horizontal={false}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
              contentContainerStyle={[Styles.flexWrap, Styles.width312]}
              extraProps= {props}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    style={[Styles.row, Styles.marginBottom8]}
                    onPress={() => _handlecount(item.name)}>
                    <Text style={Styles.colorAzureRadiance}>{item.name}</Text>
                    {
                      (item.name == selectedCountry) &&
                        <Text style={[Styles.colorBlack, Styles.paddingLeft24]}>
                          Click count: {count}
                        </Text>
                    }
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
