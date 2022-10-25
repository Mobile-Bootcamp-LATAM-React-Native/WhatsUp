import { getEncryptedItem } from '@/lib';
import { StorageConstants } from '@/shared';
import { useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '../store'

import { ThemeType, lightTheme, darkTheme } from '../styles';

export const useMyTheme = () => {
  const schema = useColorScheme();
  const theme: ThemeType = schema == 'light' ? lightTheme : darkTheme;

  return theme;
}

// Custom hook
export const useApp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isBusy, setIsBusy] = useState(false);

  return { isLoading, setIsLoading, isBusy, setIsBusy };
}

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector