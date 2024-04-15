"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { logOut, loginWithGoogle, supabase } from "../login";

const LoginPage = () => {
  const [userData, setUserData] = useState(null);

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
    } catch (error: any) {
      console.error("Error logging in with Google:", error.message);
    }
  };

  return (
    <div className="w-full min-h-screen flex-center">
      {userData ? (
        <div>
          <p>User ID: {userData}</p>
        </div>
      ) : (
        <div className="bg-gray-900 p-16 flex flex-col items-center gap-10">
          <h1 className="text-5xl text-gray-200">Welcome!</h1>
          <Button
            variant="default"
            className="bg-blue-700 flex-center text-md font-bold"
            onClick={handleGoogleLogin}
          >
            Login
          </Button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
