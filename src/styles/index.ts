import * as TextInputStyles from '../components/Input/Input.style';
export type ThemeType = {
  primaryColor: string;
  backgroundColor: string;
  primaryColorText: string;
  secundaryColorText: string;
  primaryButtonText: string;
  secundaryButtonText: string;
  senderColorMessage: string;
  receiverColorMessage: string;
  textColorMessage: string;
  smallPadding: number;
  largePadding: number;
  padding: number;
  border: number;
  margin: number;
  smallMargin: number;
  largeMargin: number;
  textInputStyle: TextInputStyles.TextInputType;
  imageBackgroundColor: string;
}

const theme = {
  primaryColor: '#10C17D',
  smallPadding: 2,
  largePadding: 8,
  padding: 4,
  border: 50,
  margin: 8,
  smallMargin: 4,
  largeMargin: 12,
  imageBackgroundColor: 'gray',
}

const lightBackgroundColor = '#ffffff';

export const lightTheme: ThemeType = {
  ...theme,
  backgroundColor: '#fff',
  primaryColorText: '#09101D',
  secundaryColorText: theme.primaryColor,
  primaryButtonText: '#fff',
  secundaryButtonText: theme.primaryColor,
  textColorMessage:'#6b7179',
  senderColorMessage : '#eafff3',
  receiverColorMessage : '#f4f6f9',
  textInputStyle: TextInputStyles.lightMode,
};

export const darkTheme: ThemeType = {
  ...theme,
  backgroundColor: '#141414',
  primaryColorText: '#fff',
  secundaryColorText: theme.primaryColor,
  primaryButtonText: '#fff',
  secundaryButtonText: theme.primaryColor,
  textColorMessage:'#ddddde',
  senderColorMessage : '#10c17d',
  receiverColorMessage : '#161b20',
  textInputStyle: TextInputStyles.darkMode,
};
