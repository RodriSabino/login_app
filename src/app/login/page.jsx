import './global.css';

function LoginPage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100'>
      <section id="up"></section>
      <section id="down"></section>
      <section id="left"></section>
      <section id="right"></section>
      
      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
        <div className="bg-white rounded-2xl">
          <div><p>Sign in Section</p></div>
          <div><p>Sign up Section</p></div>
        </div>
      </main>
    </div>
    
  );
}

export default LoginPage