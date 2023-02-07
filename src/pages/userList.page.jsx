import React, { useState } from 'react'
import { AppContext } from '../context';

import { NavbarComponent } from '../components/navbar.compenet'
import { UserListComponent } from '../components/userList.component'
import { Login } from './login.page';

const List = [
  {
    id: 1,
    userName: "Admin",
    passWord: "1234"
  }
]

export const UserList = () => {
  const [userList, setUserList] = useState(List)
  const [login, setLogin] = useState(false)

  const dispatchUserEvent = (actionType, payload) => {
		switch (actionType) {
			case 'REGISTER':
                setUserList([ ...userList, payload.newUser ]);
                return;
			case 'LOGIN':
                    let credFound = userList.find(
                          user => (
                            user.userName === payload.userName && user.passWord === payload.passWord
                        ))
                    if(credFound ) {
                        setLogin(true)
                        return 0;
                      }  
                      else {
                        alert('Try Again')
                        setLogin(false)
                        return 0;
                      }
        case 'REMOVE_USER':
                      setUserList(userList.filter(user => user.id !== payload.userId));
                      return;
			default:
				        return;
		}
	};

  const logOut = () => {
    setLogin(false)
  }

  return (
      <AppContext.Provider value={{ userList, dispatchUserEvent }}>
    {
      login ?
          <div className='bg-gray-900 pb-40 '>
            <NavbarComponent 
                logOut={logOut} 
            />
            <UserListComponent />
          </div>
        : 
         <Login /> 
    }
      </AppContext.Provider>
    
  )
}
