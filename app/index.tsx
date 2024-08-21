import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StyledInput from '../components/styled-input';
import StyledButton from '../components/styled-button';

export default function Login() {

  const handleLogin = () => {
    router.replace('home')
  }

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <StyledInput placeholder='Digite seu login' onChangeText={() => console.log('foi')}/>
      <StyledInput placeholder='Digite sua senha' onChangeText={() => console.log('foi')}/>
      <StyledButton text='Entrar' onClick={handleLogin} color='blue'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
