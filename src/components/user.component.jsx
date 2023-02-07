import React, { useContext }  from 'react'
import { AppContext } from '../context';

export const User = ({user}) => {

	const { dispatchUserEvent } = useContext(AppContext);

    const handleRemoveUser = () => {
		dispatchUserEvent('REMOVE_USER', { userId: user.id });
	};

  return (
        <tbody className="divide-y divide-gray-200 bg-white">
            {user.id === 1
            ? null
            : 
            <tr key={user.id}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                {user.firstName + " " + user.lastName}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.address}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.email}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.userName}</td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                <button onClick={handleRemoveUser} className="text-red-600 hover:text-red-900">
                    Remove<span className="sr-only">, {user.id}</span>
                </button>
                </td>
            </tr>

            }
        </tbody>
  )
}
