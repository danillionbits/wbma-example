import React, {useContext} from 'react';
import {StyleSheet, SafeAreaView, Text, Button} from 'react-native';
import {MainContext} from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const {setIsLoggedIn, user, setUser} = useContext(MainContext);

  console.log(user);

  const logout = async () => {
    setUser({});
    setIsLoggedIn(false);
    try {
      await AsyncStorage.clear();
    } catch (e) {
      console.log('Error logging out', e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile</Text>
      <Text>username: {user.username}</Text>
      <Text>email: {user.email}</Text>
      <Text>full name: {user.full_name}</Text>
      <Button title={'Logout'} onPress={logout} />
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

export default Profile;
