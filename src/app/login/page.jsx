"use client";

import './global.css';
import { FaFacebookF, FaGoogle, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import { signIn, useSession } from 'next-auth/react';

function LoginPage() {
  const { data: session } = useSession();
  console.log(session);
  const handleGoogleSignIn = async () => {
    try {
      await signIn('google', {
        callbackUrl: '/',
        redirect: true
      });
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-opacity-100'>
      <section id="up" className=""></section>
      <section id="down" className=""></section>
      <section id="left" className=""></section>
      <section id="right" className=""></section>

      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-green-500">React</span> Initializr
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-green-500 mb-2">Sign in to Account</h2>
              <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
              <div className="flex justify-center my-2">

                <button
                  onClick={handleGoogleSignIn}
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaGoogle className="text-sm" />
                </button>
              </div>
              <p className="text-gray-400 my-3">or use your email account:</p>
              <div className="flex flex-col items-center ">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 mr-2" />
                  <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1" />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <MdLockOutline className="text-gray-400 mr-2" />
                  <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1" />
                </div>
                <div className="flex justify-between w-64 mb-5">
                  <label className="flex items-center text-xs"><input type="checkbox" name="remember" className="mr-1" />Remember me</label>
                  <a href='#' className="text-green-500 text-xs ml-auto">Forgot Password?</a>
                </div>
                <a href='#' className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white">Sign in</a>
              </div>
            </div>

          </div>
          <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold">Welcome Back</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">Fill up personal information and start journey with us.</p>
            <a href='#' className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500">Sign Up</a>
          </div>
        </div>
      </main>
    </div>

  );
}

export default LoginPage