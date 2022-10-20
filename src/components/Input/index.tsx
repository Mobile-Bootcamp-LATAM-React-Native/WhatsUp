import { StyleSheet, TextInput, TextInputProps, View, StyleProp, ViewStyle, TextStyle } from 'react-native';
import React, { useContext, useState, forwardRef, useRef, useImperativeHandle } from 'react';

import { ColorContext } from '../../shared/ColorContext';
import Icon from '../Icon';

export type InputProps = {
  iconName?: string;
  isInvalid?: boolean;
  containerStyle?: StyleProp<ViewStyle>,
} & TextInputProps;

const Input = ({
  iconName,
  isInvalid,
  containerStyle,
  style: customStyles,
  onChangeText,
  ...rest
}: InputProps, ref) => {
  const themeStyles = useStyles();
  const inputStyles: any[] = [themeStyles.input];
  const inputRef = useRef<TextInput>(null);

  const [isActive, setIsActive] = useState(false);
  const [textInputContent, setTextInputContent] = useState('');

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    }
  }));

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

  if (iconName) {
    return (
      <View style={[themeStyles.container, containerStyle]}>
        <Icon name={iconName} style={themeStyles.icon} />

        <TextInput
          {...rest}
          ref={inputRef}
          style={StyleSheet.flatten(inputStyles)}
          onFocus={onFocus}
          onBlur={onBlur}
          onChangeText={onChange}
          placeholderTextColor={themeStyles.placeholderStyle.color}
        />
      </View>
    )
  }

  return (<TextInput
    {...rest}
    ref={inputRef}
    style={[themeStyles.justInput, StyleSheet.flatten(inputStyles)]}
    onFocus={onFocus}
    onBlur={onBlur}
    onChangeText={onChange}
    placeholderTextColor={themeStyles.placeholderStyle.color}
  />)

};

export default forwardRef(Input);

const useStyles = () => {
  const { primaryColor, border, textInputStyle, primaryColorText } =
    useContext(ColorContext);

  return StyleSheet.create({
    justInput: {
      backgroundColor: textInputStyle.backgroundColor,
      borderColor: textInputStyle.borderColor,
      borderWidth: textInputStyle.borderWidth,
      borderRadius: border,
      paddingHorizontal: textInputStyle.paddingHorizontal,
      alignItems: 'center',
    },

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
