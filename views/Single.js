import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import {uploadsUrl} from '../utils/variables';
import AsyncImage from '../components/AsyncImage';

const Single = ({route}) => {
  const {title, description, filename, time_added: timeAdded} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text>{title}</Text>
      <AsyncImage
        style={{
          width: 200,
          height: 300,
        }}
        source={{
          uri: uploadsUrl + filename,
        }}
        placeholderColor="#b3e5fc"
      />

      <Text>{timeAdded}</Text>
      <Text>{description}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});

Single.propTypes = {
  route: PropTypes.object,
};

export default Single;
