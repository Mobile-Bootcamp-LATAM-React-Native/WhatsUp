import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import React, { useContext, useState } from 'react';

import { ColorContext } from '../../shared/ColorContext';
import Icon from '../Icon';

export type InputProps = {
  iconName?: string;
  isInvalid?: boolean;
} & TextInputProps;

const Input = ({
  iconName,
  isInvalid,
  style: customStyles,
  onChangeText,
  ...rest
}: InputProps) => {
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

    if (onChangeText) {
      onChangeText(text);
    }
  };

  return (
    <View style={themeStyles.container}>
      {iconName && <Icon name={iconName} style={themeStyles.icon} />}

      <TextInput
        {...rest}
        style={StyleSheet.flatten(inputStyles)}
        onFocus={onFocus}
        onBlur={onBlur}
        onChangeText={onChange}
        placeholderTextColor={themeStyles.placeholderStyle.color}
      />
    </View>
  );
};

export default Input;

const useStyles = () => {
  const { primaryColor, border, textInputStyle, primaryColorText } =
    useContext(ColorContext);

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: textInputStyle.backgroundColor,
      borderColor: textInputStyle.borderColor,
      borderWidth: textInputStyle.borderWidth,
      borderRadius: border,
      paddingHorizontal: textInputStyle.paddingHorizontal,
      alignItems: 'center',
    },

    input: {
      flex: 1,
      height: 40,
      paddingLeft: 12,
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

    icon: {
      fontSize: 20,
    }
  });
};
