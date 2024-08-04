import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut 
  } from 'firebase/auth';
  import { auth } from './firebaseConfig';
  import { saveUserDetails } from './userService';
  
  const signUpUser = async (email, password, name, address, phoneNumber) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await saveUserDetails(user.uid, { email, name, address, phoneNumber });
      console.log('User created successfully!');
    } catch (error) {
      console.error('Sign-up error:', error.message);
    }
  };
  
  const signInUser = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in successfully!');
    } catch (error) {
      console.error('Sign-in error:', error.message);
    }
  };
  
  const signOutUser = async () => {
    try {
      await signOut(auth);
      console.log('User logged out successfully!');
    } catch (error) {
      console.error('Sign-out error:', error.message);
    }
  };
  
  export { signUpUser, signInUser, signOutUser };
  