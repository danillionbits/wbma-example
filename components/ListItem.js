import {StyleSheet, TouchableOpacity, Image, View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {uploadsUrl} from '../utils/variables';

const ListItem = ({singleMedia}) => {
  const item = singleMedia;
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: uploadsUrl + item.thumbnails?.w160}}
      />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgb(36, 40, 52)',
    padding: 10,
    marginTop: 10,
  },
  image: {
    width: 150,
    height: 80,
    borderRadius: 5,
    borderBottomLeftRadius: 50,
  },
  info: {
    flexGrow: 1,
    paddingLeft: 10,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    color: 'gray',
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

export default ListItem;
