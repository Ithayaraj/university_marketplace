import { doc, setDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

const saveUserDetails = async (userId, userDetails) => {
  try {
    await setDoc(doc(db, 'users', userId), userDetails);
    console.log('User details saved successfully!');
  } catch (error) {
    console.error('Error saving user details:', error.message);
  }
};

export { saveUserDetails };
