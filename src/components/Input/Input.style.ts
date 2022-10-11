import {TextStyle} from 'react-native';
export type TextInputType = {
  backgroundColor: string;
  borderColor: string;
  placeholderColor: string;
  borderWidth: number;
  paddingHorizontal: number;
  paddingVertical: number;
  errorBorderColor: string;
  normalFontWeight: TextStyle['fontWeight'];
  placeholderFontWeight: TextStyle['fontWeight'];
};

const baseStyle: TextInputType = {
  backgroundColor: '',
  borderColor: '',
  placeholderColor: '',
  errorBorderColor: '',
  borderWidth: 2,
  paddingHorizontal: 30,
  paddingVertical: 8,
  normalFontWeight: '400',
  placeholderFontWeight: 'bold',
};

export const lightMode: TextInputType = {
  ...baseStyle,
  backgroundColor: '#fff',
  borderColor: '#eee',
  placeholderColor: '#ccc',
  errorBorderColor: '#c92a2a',
};

export const darkMode: TextInputType = {
  ...baseStyle,
  backgroundColor: '#222',
  borderColor: '#333',
  placeholderColor: '#555',
  errorBorderColor: '#fa5252',
};
