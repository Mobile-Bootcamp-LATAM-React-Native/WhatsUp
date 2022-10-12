import {StyleSheet, Text, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Button} from '@/components';
import {RootStackParamList} from '@/navigation';

type SignInProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

const index = ({navigation}: SignInProps) => {
  const goToMessenger = () => {
    navigation.push('Messenger');
  };

  return (
    <View>
      <Button text="Go To Messenger" onPress={goToMessenger} />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
