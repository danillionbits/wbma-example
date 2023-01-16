import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import Banner from './components/Banner';
import List from './components/List';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Banner />
        <List />
        <StatusBar style="auto" />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(31, 32, 40)',
  },
});

export default App;
