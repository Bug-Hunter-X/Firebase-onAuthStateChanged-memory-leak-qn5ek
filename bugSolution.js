import { onAuthStateChanged, auth } from './firebase'; // Assuming you have firebase config

let unsubscribe;

function MyComponent() {
  useEffect(() => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        console.log('User is signed in:', user.uid);
      } else {
        // User is signed out
        console.log('User is signed out');
      }
    });

    return () => {
      // Cleanup function: unsubscribe when component unmounts
      unsubscribe && unsubscribe();
    };
  }, []);

  // ... rest of your component code

  return (
    <div>
      {/* ... JSX to display user info or auth state */}
    </div>
  );
}

export default MyComponent;