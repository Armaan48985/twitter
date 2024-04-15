// Example serverless function (Node.js)

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = "https://hjdhdifgxymbsnctebya.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqZGhkaWZneHltYnNuY3RlYnlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4NDA5NTUsImV4cCI6MjAyODQxNjk1NX0.7EcgS3VwtGuppAKxUSI2dzXcT8F9z6X4hCatQNFPWVc";

export const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = async (event) => {
  try {
    const { user } = event; // The user object from the authentication event
    const { id, email } = user;

    // Insert the user data into your custom user table
    const { data, error } = await supabase
      .from('users')
      .insert([{ id, email }]); // Modify this to match your custom user table schema

    if (error) {
      throw error;
    }

    console.log('User data inserted:', data);
  } catch (error) {
    console.error('Error inserting user data:', error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
