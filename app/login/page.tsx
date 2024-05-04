'use client'
import { Button } from '@/components/ui/button';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const Login = () => {

    // Initialize the Supabase client
    const supabase = createClient('https://your-project-url.supabase.co', 'your-supabase-key')
    
    // Define the Google provider
    const provider = new supabase.auth.Google({
      scope: 'email',
    })
    
    // Authenticate the user with Google
    const { user, session, error } = await supabase.auth.signIn({ provider })
    
    // Save the user's data into your database's `users` table
    const { data, error } = await supabase
      .from('users')
      .upsert({
        id: user.id,
        email: user.email,
        name: user.user_metadata.full_name,
        avatar_url: user.user_metadata.avatar_url,
      }, { returning: 'minimal' })

    return (
        <main>
            <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={handleSignUp} variant='default'>Sign Up</Button>
            <Button onClick={handleSignIn} variant='default'>Sign In</Button>
        </main>
  )
}

export default Login