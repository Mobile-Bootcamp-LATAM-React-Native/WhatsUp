import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import React, {useContext, useState} from 'react';

import {ColorContext} from '../shared/ColorContext';

type InputProps = {
  isInvalid?: boolean;
} & TextInputProps;

const Input = ({isInvalid, style: customStyles, ...rest}: InputProps) => {
  const themeStyles = useStyles();
  let styles: any[] = [themeStyles.input];

  const [isActive, setIsActive] = useState(false);
  const [textInputContent, setTextInputContent] = useState('');

  if (isActive) {
    styles.push(themeStyles.active);
  }

  if (isInvalid) {
    styles.push(themeStyles.invalidInput);
  }

  if (textInputContent.length !== 0) {
    styles.push(themeStyles.textStyle);
  }

  const onFocus = () => {
    setIsActive(true);
  };

  const onBlur = () => {
    setIsActive(false);
  };

  const onChange = (text: string) => {
    setTextInputContent(text);
  };

  return (
    <TextInput
      {...rest}
      style={[customStyles, styles]}
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
