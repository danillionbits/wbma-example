import {FlatList} from 'react-native';
import {useMedia} from '../hooks/ApiHooks';
import ListItem from './ListItem';

const List = ({navigation}) => {
  const {mediaArray} = useMedia();

  return (
    <FlatList
      data={mediaArray}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => 
        <ListItem 
          navigation={navigation} 
          singleMedia={item} 
        />
      }
    />
  );
};

export default List;

Home.propTypes = {
  navigation: PropTypes.object,
};