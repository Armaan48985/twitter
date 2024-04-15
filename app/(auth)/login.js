"use client";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import { useDispatch } from "react-redux";

const supabaseUrl = "https://hjdhdifgxymbsnctebya.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqZGhkaWZneHltYnNuY3RlYnlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4NDA5NTUsImV4cCI6MjAyODQxNjk1NX0.7EcgS3VwtGuppAKxUSI2dzXcT8F9z6X4hCatQNFPWVc";

export const supabase = createClient(supabaseUrl, supabaseKey);


export async function loginWithGoogle() {
  try {
    const { user,  error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    })

    console.log(user, error)

  } catch (error) {
    console.error("Error signing in with Google:", error.message);
  }


}


export async function logOut() {
  try {
    const { error } = await supabase.auth.signOut();
  } catch (error) {
    console.error("Error signing out:", error.message);
  }
}
