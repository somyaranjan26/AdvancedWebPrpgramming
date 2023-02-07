import React, { useContext } from 'react'
import { AppContext } from '../context';
import { RegisterComponent } from './register.component';
import { User } from './user.component';

export const UserListComponent = () => {
  const { userList } = useContext(AppContext);

  return (
    <>
    <RegisterComponent />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {
        (Object.keys(userList).length) <= 1
        ?
        <div className="text-center mt-40">
      <h3 className="mt-2 text-xl font-medium text-white">No users</h3>
      <p className="mt-1 text-base text-gray-500">Get started by registering a new user.</p>
    </div>
        :
        <div>
        <div className="sm:flex sm:items-center mt-10">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-white">Users</h1>
            <p className="mt-2 text-sm text-gray-300">
              A list of all the users in your account including their name, title, email and role.
            </p>
          </div>
        </div> 
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      <p href="/" className="group inline-flex">
                        Name
                      </p>
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      <p href="/" className="group inline-flex">
                        Address
                      </p>
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      <p href="/" className="group inline-flex">
                        Email
                      </p>
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      <p href="/" className="group inline-flex">
                        Username
                      </p>
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Remove</span>
                    </th>
                  </tr>
                </thead>
                {userList.map(user => ( 
                      <User key={user.id} user={user} />
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
        </div>
      }
    </div>
    </>
  )
}
