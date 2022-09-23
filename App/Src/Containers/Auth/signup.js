import React, {
  Component,
  useState,
  useEffect,
  createRef,
  Fragment,
} from 'react';
import {
  ScrollView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { StatusBar } from '../../Components/StatusBar';
import { CustomTextInput } from '../../Components/TextInput';
import { Styles, CONSTANTS, COLORS } from '../../Themes';

export default function Signup(props) {
  // text input reference
  const emailRef = createRef();
  const passwordRef = createRef();
  const userNameRef = createRef();

  const navigation = useNavigation();

  // state variables
  const [userName, setUserName] = useState('');
  const [userNameErr, setUserNameErr] = useState('');

  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');

  const [pass, setPass] = useState('');
  const [passErr, setPassErr] = useState('');

  const [focusId, setFocusId] = useState('');

  //clear username
  useEffect(() => {
    setUserNameErr('');
  }, [userName]);

  //clear email
  useEffect(() => {
    setEmailErr('');
  }, [email]);

  //clear email
  useEffect(() => {
    setPassErr('');
  }, [pass]);

  // handle on submit
  function _handleSubmit() {
    let validate = true; // _validate();

    if (validate == true) {
      _submit();
    }
  }

  // submit
  function _submit() {
    navigation.navigate('home');
  }

  // text input functions for focus
  const _onFocusAnimation = (data) => {
    setFocusId(data);
  };

  // text input functions for blur
  const _onBlurAnimation = () => {
    setFocusId('');
  };

  // validate
  function _validate() {
    if (!email) {
      setEmailErr('Email can not be empty');
      return false;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailErr('Enter a valid email');
      return false;
    } else if (!userName) {
      setUserNameErr('username can not be empty');
      return false;
    } else if (!pass) {
      setPassErr('Password can not be empty');
      return false;
    } else if (pass.length < 6) {
      setPassErr('Password cannot be less than 6 ');
      return false;
    }

    return true;
  }

  return (
    <SafeAreaView
      style={[Styles.container, Styles.backgroundColorWhite]}
      forceInset={CONSTANTS.forceInset}>
      {/* status bar */}
      <StatusBar />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        enabled={true}
        style={Styles.flexOne}>
        <ScrollView
          bounces={false}
          overScrollMode={'never'}
          contentContainerStyle={[Styles.flexGrowOne, Styles.center]}
          keyboardShouldPersistTaps={'always'}
          showsVerticalScrollIndicator={false}>
          {/* login text header*/}
          <View style={Styles.paddingBottom24}>
            <Text style={[Styles.colorBlack, Styles.fontSize20]}>Login</Text>
          </View>

          <View>
            {/* user name text input*/}
            <CustomTextInput
              style={[Styles.borderWidth1, Styles.height40, Styles.width312]}
              id={'userName'}
              label={'Username *'}
              placeholder={'Username'}
              value={userName}
              focusId={focusId}
              inputRef={userNameRef}
              placeholderTextColor={COLORS.WHITE}
              onFocus={() => _onFocusAnimation('userName')}
              onSubmitEditing={() => {
                emailRef.current.focus();
              }}
              onEndEditing={_onBlurAnimation}
              returnKeyType={'next'}
              keyboardType={'default'}
              secureTextEntry={false}
              autoCompleteType={'off'}
              autoCapitalize={'none'}
              selectionColor={COLORS.BLUE_GEM}
              error={userNameErr}
              onChangeText={(uname) => {
                setUserName(uname);
              }}
            />
          </View>

          {/* email text input*/}
          <View style={Styles.margin12}>
            <CustomTextInput
              style={[Styles.borderWidth1, Styles.height40, Styles.width312]}
              id={'email'}
              label={'Email *'}
              placeholder={'Email'}
              value={email}
              focusId={focusId}
              inputRef={emailRef}
              placeholderTextColor={COLORS.WHITE}
              onFocus={() => _onFocusAnimation('email')}
              onSubmitEditing={() => {
                passwordRef.current.focus();
              }}
              onEndEditing={_onBlurAnimation}
              returnKeyType={'next'}
              keyboardType={'email-address'}
              secureTextEntry={false}
              autoCompleteType={'off'}
              autoCapitalize={'none'}
              selectionColor={COLORS.BLUE_GEM}
              error={emailErr}
              onChangeText={(email) => {
                setEmail(email);
              }}
            />
          </View>

          {/* password text input*/}
          <View style={Styles.margin12}>
            <CustomTextInput
              style={[Styles.borderWidth1, Styles.height40, Styles.width312]}
              id={'pass'}
              label={'Password *'}
              placeholder={'Password'}
              value={pass}
              focusId={focusId}
              inputRef={passwordRef}
              placeholderTextColor={COLORS.WHITE}
              onFocus={() => _onFocusAnimation('pass')}
              onSubmitEditing={() => {
                passwordRef.current.focus();
              }}
              onEndEditing={_onBlurAnimation}
              returnKeyType={'next'}
              keyboardType={'default'}
              secureTextEntry={true}
              autoCompleteType={'off'}
              autoCapitalize={'none'}
              selectionColor={COLORS.BLUE_GEM}
              error={passErr}
              onChangeText={(pass) => {
                setPass(pass);
              }}
            />
          </View>

          {/* submit button */}
          <TouchableOpacity
            style={[
              Styles.paddingHorizontal16,
              Styles.paddingVertical10,
              Styles.marginTop22,
              Styles.backgroundColorBlueGem,
              Styles.borderRadius5,
            ]}
            onPress={_handleSubmit}>
            <Text style={Styles.colorWhite}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
