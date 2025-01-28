import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Aici poți adăuga validarea câmpurilor sau trimite datele la un backend
    if (name && email && password) {
      Alert.alert('Succes', 'Te-ai înregistrat cu succes!');
      // Poți adăuga logica pentru trimiterea datelor la un server sau la un backend
    } else {
      Alert.alert('Eroare', 'Completează toate câmpurile!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Înregistrare</Text>

      <TextInput
        style={styles.input}
        placeholder="Nume"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Parolă"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Înregistrează-te" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Asigură că elementele sunt vizibile
    backgroundColor: 'white', // Fundal alb
    width: '100%', // Evită probleme cu layout-ul
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
    width: '100%', // Asigură că inputurile sunt responsabile
  },
});

export default RegisterScreen;
