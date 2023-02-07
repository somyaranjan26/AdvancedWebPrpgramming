import React from 'react'

export const LoginComponent = (props) => {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleLoginUser();
  };

  return (
    <div className="bg-gray-900 h-screen">
      <form onSubmit={handleSubmit}>
        <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-100">Assignment 2</h2>
            <h2 className="mt-6 text-center text-3xl font-semibold text-gray-100">Sign in to your account</h2>
          </div>

          <div className="mt-8 mx-10 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-8 shadow rounded-lg sm:px-10">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <div className="mt-1">
                    <input
                      id="username"
                      name="username"
                      type="name"
                      value={props.userName}
                      onChange={(event) => props.setUserName(event.target.value)}
                      autoComplete="off"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={props.passWord}
                      onChange={(event) => props.setPassWord(event.target.value)}
                      autoComplete="off"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">

                <div className="text-sm">
                  <button onClick={props.handleRegisterFirst} className="font-medium text-indigo-600 hover:text-indigo-500">
                    New user? <u>Create an account</u> 
                  </button>
                </div>
              </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center mt-6 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign in
                  </button>
                </div>

            </div>
          </div>
        </div>
        
      </form>
    </div>
  )
}
