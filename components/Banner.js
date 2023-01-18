import {StyleSheet, View, ImageBackground, Text} from 'react-native';
import {Settings} from 'react-native-feather';

import kitten from '../assets/kitten.jpg';

const Banner = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={kitten}
        style={styles.image}
        borderBottomRightRadius={50}
      />
      <Text style={styles.text}> Homeless Kittens </Text>
      <Settings style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    position: 'relative',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    position: 'absolute',
    left: 0,
    bottom: 10,
    padding: 10,
    backgroundColor: 'blue',
    fontSize: 20,
    color: 'white',
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: 'white',
  },
});

export default Banner;
