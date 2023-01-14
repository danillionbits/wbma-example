import {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import ListItem from './ListItem';

const List = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const url =
    'https://raw.githubusercontent.com/mattpe/wbma/master/docs/assets/test.json';
  const loadMedia = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setMediaArray(json);
    } catch (error) {
      console.error('List', 'loadMedia', error);
    }
  };

  useEffect(() => {
    loadMedia();
  }, []);

  console.log('List', 'mediaArray', mediaArray);

  return (
    <FlatList
      data={mediaArray}
      renderItem={({item}) => <ListItem singleMedia={item} />}
    />
  );
};

export default List;
