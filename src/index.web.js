import { AppRegistry } from 'react-native-web';
import App from './app';
   import { name as appName } from './app.json';

   AppRegistry.registerComponent(appName, () => App);

   AppRegistry.runApplication(appName, {
     initialProps: {},
     rootTag: document.getElementById('root'),
   });
   