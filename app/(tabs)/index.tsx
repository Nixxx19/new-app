// app/index.tsx
import { useEffect } from 'react';
import { router } from 'expo-router';

export default function Index() {
  useEffect(() => {
    // Immediately route to the auth flow
    router.replace('/(auth)/login');
  }, []);

  // Nothing to render while the redirect happens
  return null;
}
