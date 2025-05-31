import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';

export default function LoginScreen({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username.trim() && password.trim()) {
      onLogin();
    } else {
      Alert.alert('Podaj nazwę użytkownika i hasło');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Zaloguj się</Text>
      <TextInput
        placeholder='Nazwa użytkownika'
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder='Hasło'
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button title='Zaloguj' onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 12,
    padding: 12,
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
});
