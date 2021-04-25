import React from 'react';
import LoginButton from '../Login/Login-button';
import LogoutButton from '../Logout/Logout-button';
import { useAuth0 } from '@auth0/auth0-react';

const AuthButtonsLoginLogout = () => {
    const { isAutheticated } = useAuth0();

    return isAutheticated ? <LogoutButton/> : <LoginButton/>
}

export default AuthButtonsLoginLogout;