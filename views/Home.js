import {StyleSheet, SafeAreaView} from 'react-native';
import PropTypes from 'prop-types';
import Banner from '../components/Banner';
import List from '../components/List';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Banner />
      <List navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Home;

Home.propTypes = {
  navigation: PropTypes.object,
};
