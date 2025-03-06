// This is a simple Netlify function to handle Next.js image optimization
// It's based on the Netlify Next.js plugin

exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: 'Next.js image optimization is handled by the @netlify/plugin-nextjs plugin',
    }),
  };
};