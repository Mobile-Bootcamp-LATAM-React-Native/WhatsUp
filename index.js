/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Home from './Home';
import SignIn from './src/screens/SignIn';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => SignIn);
