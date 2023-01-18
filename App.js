import {StatusBar} from 'react-native';
import Navigator from './navigations/Navigator';

const App = () => {
  return (
    <>
      <Navigator />
      <StatusBar style="auto" />
    </>
  );
};

export default App;
