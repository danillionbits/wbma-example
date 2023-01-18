import {SafeAreaView, StyleSheet} from 'react-native';
import Banner from '../components/Banner';
import List from '../components/List';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <Banner />
        <List navigation={navigation}/>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(31, 32, 40)',
  },
});

export default Home;

Home.propTypes = {
  navigation: PropTypes.object,
};