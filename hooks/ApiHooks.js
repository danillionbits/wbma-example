import {useEffect, useState} from 'react';
import {baseUrl} from '../utils/variables';

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const loadMedia = async () => {
    try {
      const response = await fetch(baseUrl + 'media');
      const json = await response.json();
      const media = await Promise.all(
        json.map(async (file) => {
          const fileResponse = await fetch(baseUrl + 'media/' + file.file_id);
          return await fileResponse.json();
        })
      );
      setMediaArray(media);
    } catch (error) {
      console.error('List', 'loadMedia', error);
    }
  };

  useEffect(() => {
    loadMedia();
  }, []);

  return {mediaArray};
};

const useAuthentication = () => {
  const postLogin = async (userCredentials) => {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userCredentials),
      };
      const response = await fetch(baseUrl + 'login', options);
      const loginData = await response.json();
      if (response.ok) {
        return loginData;
      } else {
        throw new Error(loginData.message);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return {postLogin};
};

const useUser = () => {
  const getUserByToken = async (token) => {
    try {
      const options = {
        method: 'GET',
        headers: {'x-access-token': token},
      };
      const response = await fetch(baseUrl + 'users/user', options);
      const userData = await response.json();
      if (response.ok) {
        return userData;
      } else {
        throw new Error(userData.message);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const postUser = async (userData) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    };
    try {
      const response = await fetch(baseUrl + 'users', options);
      const registerData = await response.json();
      if (response.ok) {
        return registerData;
      } else {
        throw new Error(registerData.message);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return {getUserByToken, postUser};
};

export {useMedia, useAuthentication, useUser};
