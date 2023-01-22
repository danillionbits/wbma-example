import {Text, View, TextInput, Button} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useUser} from '../hooks/ApiHooks';

const RegisterForm = () => {
  const {postUser} = useUser();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
      email: '',
      full_name: '',
    },
  });

  const register = async (registerData) => {
    try {
      const registerResult = await postUser(registerData);
      console.log('register', registerResult);
    } catch (error) {
      console.log('Error register', error);
    }
  };

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
          minLength: 3,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="username"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="username"
      />
      {errors.username?.type === 'required' && <Text>is required.</Text>}
      {errors.username?.type === 'minLength' && (
        <Text>min length is 3 characters</Text>
      )}

      <Controller
        control={control}
        rules={{
          required: true,
          minLength: 5,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={true}
          />
        )}
        name="password"
      />
      {errors.password && <Text>Password (min. 5 chars) is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      {errors.email?.type === 'required' && <Text>is required.</Text>}

      <Controller
        control={control}
        rules={{
          minLength: 3,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="full name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="full_name"
      />
      {errors.full_name?.type === 'minLength' && (
        <Text>min length is 3 characters</Text>
      )}
      <Button title="Submit" onPress={handleSubmit(register)} />
    </View>
  );
};

export default RegisterForm;
