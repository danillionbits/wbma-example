import React, {useState} from 'react';
import {Keyboard, ScrollView, TouchableOpacity} from 'react-native';
import {Button, Card, Text} from '@rneui/themed';
import ProfileInfo from '../components/ProfileInfo';
import ProfileForm from '../components/ProfileForm';

const Profile = () => {
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
        </Card>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Profile;
