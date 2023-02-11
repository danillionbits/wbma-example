import React, {useState} from 'react';
import {Keyboard, ScrollView, TouchableOpacity} from 'react-native';
import {Button, Card, Text} from '@rneui/themed';
import ProfileInfo from '../components/ProfileInfo';
import ProfileForm from '../components/ProfileForm';
import PropTypes from 'prop-types';

const Profile = ({navigation}) => {
  const [toggleForm, setToggleForm] = useState(true);
  const handleToggleForm = () => setToggleForm(!toggleForm);

  return (
    <ScrollView>
      <TouchableOpacity onPress={() => Keyboard.dismiss()} activeOpacity={1}>
        {toggleForm ? (
          <ProfileInfo />
        ) : (
          <ProfileForm handleToggleForm={handleToggleForm} />
        )}
        <Card>
          <Text>
            {toggleForm
              ? 'Info not correct? Please update'
              : 'Go back to profile'}
          </Text>
          <Button
            type="outline"
            title={toggleForm ? 'Update info' : 'Go back'}
            onPress={() => setToggleForm(!toggleForm)}
          />
          <Button
            type="outline"
            title="My files"
            onPress={() => navigation.navigate('MyFiles')}
          />
        </Card>
      </TouchableOpacity>
    </ScrollView>
  );
};

Profile.propTypes = {
  navigation: PropTypes.object,
};

export default Profile;
