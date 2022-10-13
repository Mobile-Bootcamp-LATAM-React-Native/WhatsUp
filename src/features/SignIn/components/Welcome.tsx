import {StyleSheet, Text, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Button} from '@/components';
import {RootStackParamList} from '@/navigation';

type WelcomeProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const Welcome = ({navigation}: WelcomeProps) => {
  const goToSignIn = () => {
    navigation.replace('SignIn');
  };

  return (
    <View>
      <Button text="Continue" onPress={goToSignIn} />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
