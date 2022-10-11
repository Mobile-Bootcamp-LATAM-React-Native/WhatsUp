export type ThemeType = {
  primaryColor: string;
  backgroundColor: string;
  primaryColorText: string;
  secundaryColorText: string;
  primaryButtonText: string;
  secundaryButtonText: string;
  loadingColor: string;

  smallPadding: number,
  largePadding: number,
  padding: number,
  border: number,
  margin: number,
  smallMargin: number,
  largeMargin: number,
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
}

const lightBackgroundColor = '#ffffff';

export const lightTheme: ThemeType = {
  ...theme,
  backgroundColor: '#fff',
  primaryColorText: '#09101D',
  secundaryColorText: theme.primaryColor,
  primaryButtonText: '#fff',
  secundaryButtonText: theme.primaryColor,
  loadingColor: '#fff'
}

export const darkTheme: ThemeType = {
  ...theme,
  backgroundColor: '#141414',
  primaryColorText: '#fff',
  secundaryColorText: theme.primaryColor,
  primaryButtonText: '#fff',
  secundaryButtonText: theme.primaryColor,
  loadingColor: "#161B20"
}