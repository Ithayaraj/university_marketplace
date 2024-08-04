import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './src/services/firebaseConfig';
import AuthScreen from './src/components/AuthScreen';
import AuthenticatedScreen from './src/components/AuthenticatedScreen';
import { signOutUser } from './src/services/authService';

export default App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOutUser();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {user ? (
        <AuthenticatedScreen user={user} handleLogout={handleLogout} />
      ) : (
        <AuthScreen />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
});
