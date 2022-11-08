import React from 'react';

const Register = () => {



  const handleOnSubmit = e =>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const imageUrl = form.image.value;
    const email = form.email.value;
    const password = form.password.value;

    
  }
  return (
    <section>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl mt-4 md:mt-8 mx-auto bg-[#e4e4e4] dark:text-gray-100">
        <h1 className="text-2xl text-dark-gray font-bold text-center">Register</h1>
        <form onSubmit={handleOnSubmit} action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
          <div className="space-y-1 text-sm">
            <label  className="block text-start dark:text-gray-400">Image url:</label>
            <input type="text" name="image" placeholder="Image url" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
          </div>
          <div className="space-y-1 text-sm">
            <label  className="block text-start dark:text-gray-400">Name</label>
            <input type="text" name="name" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
          </div>
          <div className="space-y-1 text-sm">
            <label  className="block text-start dark:text-gray-400">Email</label>
            <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
          </div>
          <div className="space-y-1 text-sm">
            <label className="block text-start dark:text-gray-400">Password</label>
            <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
            <div className="flex justify-end text-xs dark:text-gray-400">
              <a rel="noopener noreferrer" href="#">Forgot Password?</a>
            </div>
          </div>
          <button type='submit' className="block w-full p-3 text-center rounded-md text-[#fff] hover:bg-dark-green bg-green">Sign in</button>
        </form>
        <p className="text-sm text-center sm:px-6 dark:text-gray-400">Already have an account?
          <a rel="noopener noreferrer" href="#" className="underline text-green">Login</a>
        </p>
      </div>
    </section>
  );
};

export default Register;