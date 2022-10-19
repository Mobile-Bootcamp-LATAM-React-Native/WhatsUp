import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import React, {useContext, useState} from 'react';

import {ColorContext} from '../../shared/ColorContext';

export type InputProps = {
  isInvalid?: boolean;
} & TextInputProps;

const Input = ({isInvalid, style: customStyles, onChangeText, ...rest}: InputProps) => {
  const themeStyles = useStyles();
  const inputStyles: any[] = [themeStyles.input];

  const [isActive, setIsActive] = useState(false);
  const [textInputContent, setTextInputContent] = useState('');

  inputStyles.push(customStyles);

  inputStyles.push(
    isActive && themeStyles.active,
    isInvalid && themeStyles.invalidInput,
    textInputContent.length !== 0 && themeStyles.textStyle,
  );

  const onFocus = () => {
    setIsActive(true);
  };

  const onBlur = () => {
    setIsActive(false);
  };

  const onChange = (text: string) => {
    setTextInputContent(text);
    onChangeText(text);
  };

  return (
    <TextInput
      {...rest}
      style={StyleSheet.flatten(inputStyles)}
      onFocus={onFocus}
      onBlur={onBlur}
      onChangeText={onChange}
      placeholderTextColor={themeStyles.placeholderStyle.color}
    />
  );
};

export default Input;

const useStyles = () => {
  const {primaryColor, border, textInputStyle, primaryColorText} =
    useContext(ColorContext);

  return StyleSheet.create({
    input: {
      backgroundColor: textInputStyle.backgroundColor,
      borderColor: textInputStyle.borderColor,
      borderWidth: textInputStyle.borderWidth,
      borderRadius: border,
      paddingHorizontal: textInputStyle.paddingHorizontal,
      paddingVertical: textInputStyle.paddingVertical,
      fontWeight: textInputStyle.placeholderFontWeight,
      color: primaryColorText,
    },

    invalidInput: {
      borderColor: textInputStyle.errorBorderColor,
    },

    active: {
      borderColor: primaryColor,
    },

    placeholderStyle: {
      color: textInputStyle.placeholderColor,
    },

    textStyle: {
      fontWeight: textInputStyle.normalFontWeight,
    },
  });
};
