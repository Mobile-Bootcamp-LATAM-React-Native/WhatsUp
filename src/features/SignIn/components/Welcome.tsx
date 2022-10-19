import { StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Button, Label, Logo } from '@/components';
import { RootStackParamList } from '@/navigation';

type WelcomeProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const Welcome = ({ navigation }: WelcomeProps) => {
  const goToSignIn = () => {
    navigation.replace('SignIn');
  };

  return (
    <View style={styles.main}>
      <View style={[styles.content, styles.logo]}>
        <Logo />
      </View>
      <View style={styles.content}>
        <Label type="h3">
          The best chat app of this century
        </Label>

        <Button style={styles.button} text="Continue" onPress={goToSignIn} />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 20,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    justifyContent: 'flex-end',
  },
  button: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
});
