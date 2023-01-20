import {useState} from 'react';
import {View, Image} from 'react-native';
import PropTypes from 'prop-types';

const AsyncImage = ({placeholderColor, style, source}) => {
  const [loaded, setLoaded] = useState(false);

  const _onLoad = () => setTimeout(() => setLoaded(true), 1000);

  return (
    <View style={style}>
      <Image
        source={source}
        resizeMode={'contain'}
        style={[
          style,
          {
            position: 'absolute',
            resizeMode: 'contain',
          },
        ]}
        onLoad={_onLoad}
      />
      {!loaded && (
        <View
          style={[
            style,
            {
              position: 'absolute',
              backgroundColor: placeholderColor || '#90a4ae',
            },
          ]}
        />
      )}
    </View>
  );
};

AsyncImage.propTypes = {
  placeholderColor: PropTypes.string,
  style: PropTypes.object,
  source: PropTypes.object,
};

export default AsyncImage;
