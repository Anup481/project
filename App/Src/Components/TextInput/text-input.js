import React, { Fragment } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

// manual import
import { Styles, CONSTANTS, COLORS } from '../../Themes';

export default function CustomTextInput(props) {
  // common props for text input
  let {
    id,
    label,
    value,
    placeholder,
    onChangeText,
    onSubmitEditing,
    placeholderTextColor,
    editable,
    returnKeyType,
    keyboardType,
    secureTextEntry,
    autoCompleteType,
    maxLength,
    onFocus = () => {},
    onBlur = () => {},
    selectionColor,
    error,
    focusId,
    inputRef,
    disabled,
  } = { ...props };

  return (
    <View>
      {/* label */}
      <Fragment>
        <Text
          style={[
            Styles.colorBlack,
            Styles.marginBottom8,
          ]}
          numberOfLines={1}
          ellipsizeMode={'tail'}>
          {label ? label : placeholder}
        </Text>
      </Fragment>

      {/* text input */}
      <TouchableOpacity style={Styles.row}>
        <TextInput
          selectionColor={selectionColor}
          placeholderTextColor={placeholderTextColor}
          autoCorrect={false}
          spellCheck={false}
          value={value}
          editable={editable || disabled}
          ref={inputRef}
          onFocus={() => onFocus(id)}
          returnKeyType={returnKeyType}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          maxLength={maxLength}
          textAlignVertical={props.multiline == true ? 'top' : 'center'}
          autoCompleteType={autoCompleteType}
          onBlur={onBlur()}
          placeholder={placeholder}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          {...props}
        />
      </TouchableOpacity>
    </View>
  );
}
