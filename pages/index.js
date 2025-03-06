// This file exists to satisfy the build requirement
// The actual application uses the App Router in src/app

export default function Home() {
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