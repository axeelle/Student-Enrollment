import React, { useState } from 'react';
import { auth } from '../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Sign in the user with email and password
      await signInWithEmailAndPassword(auth, email, password);
      
      alert('Login Successful!');
      // Redirect all users to the homepage or a default path
      navigate('/dashboard'); 
      
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg w-80 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <input 
          type="email" 
          placeholder="Email" 
          className="border p-2 rounded" 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="border p-2 rounded" 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button className="bg-green-500 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}

export default Login;
