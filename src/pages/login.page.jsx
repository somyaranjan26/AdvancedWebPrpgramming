import React, { useContext, useState } from 'react'
import { AppContext } from '../context';
import { LoginComponent } from '../components/login.component'

export const Login = props => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");

  const { dispatchUserEvent } = useContext(AppContext);

	function handleLoginUser() {
		dispatchUserEvent('LOGIN', { 
                                userName: userName, 
                                passWord: passWord
                               });
	};

  function handleRegisterFirst() {
    dispatchUserEvent('LOGIN', { 
      userName: "Admin", 
      passWord: "1234"
     });
  };


  return (
    <div>
      <LoginComponent 
          userName={userName} 
          setUserName={setUserName} 
          passWord={passWord} 
          setPassWord={setPassWord} 
          handleLoginUser = {handleLoginUser}
          handleRegisterFirst = {handleRegisterFirst}
      />
    </div>
  )
}
