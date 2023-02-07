import React, { useContext, useState } from 'react'
import { AppContext } from '../context';

export const RegisterComponent = () => {
  const { dispatchUserEvent } = useContext(AppContext);
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [passWord, setPassWord] = useState('')
  const [userName, setUserName] = useState('')

  const handleRegisterUser = (event) => {
    event.preventDefault();
		const user = { id: Math.random(), firstName, lastName, email, address, userName, passWord};
		dispatchUserEvent('REGISTER', { newUser: user });

    setFirstName('')
    setLastName('')
    setEmail('')
    setAddress('')
    setPassWord('')
    setUserName('')
	};

  return (
    <div className="border-1 container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
    <form onSubmit={handleRegisterUser}>
      <div className="bg-white shadow px-4 py-5 rounded-t-lg sm:p-6">
        <div className="px-16 md:px-40">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Register User</h3>
            <div className="mt-2 border-b border-gray-400 text-sm "></div>
          </div>
          <div className="mt-6 md:mt-0 md:col-span-2">
              <div className="mt-6 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={e => {setFirstName(e.target.value)}}
                    id="firstName"
                    autoComplete="off"
                    required
                    className="mt-1 border px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={e => {setLastName(e.target.value)}}
                    id="lastName"
                    autoComplete="off"
                    required
                    className="mt-1 border px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => {setEmail(e.target.value)}}
                    id="email-address"
                    autoComplete="off"
                    required
                    className="mt-1 border px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6">
                  <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={e => {setAddress(e.target.value)}}
                    id="street-address"
                    autoComplete="off"
                    required
                    className="mt-1 border px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <input
                    type="text"
                    value={userName}
                    onChange={e => {setUserName(e.target.value)}}
                    id="userName"
                    autoComplete="off"
                    required
                    className="mt-1 border px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label htmlFor="passWord" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="text"
                    value={passWord}
                    onChange={e => {setPassWord(e.target.value)}}
                    id="passWord"
                    autoComplete="off"
                    required
                    className="mt-1 border px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    type="text"
                    name="confirm-password"
                    id="confirm-password"
                    autoComplete="off"
                    required
                    className="mt-1 border px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-3 bg-gray-50 rounded-b-lg text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
        </div>
        </form>
      </div>
  )
}
