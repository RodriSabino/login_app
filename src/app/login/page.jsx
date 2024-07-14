import './global.css';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

function LoginPage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-black'>
      <section id="up"></section>
      <section id="down"></section>
      <section id="left"></section>
      <section id="right"></section>
      
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
                <a href='#' className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <FaFacebookF className="text-sm" />
                </a>
                <a href='#' className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <FaGoogle className="text-sm" />
                </a>
              </div>
              <p className="text-gray-500 text-sm">or use your email account:</p>
              <div className="bg-gray-100"></div>
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