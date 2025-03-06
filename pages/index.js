import { useEffect } from 'react';
import { useRouter } from 'next/router';

// This is a minimal valid component that redirects to the App Router version
export default function LegacyHome() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to the App Router version
    router.replace('/');
  }, [router]);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      <h1>Redirecting...</h1>
      <p>Please wait while we redirect you to the main site.</p>
    </div>
  );
}