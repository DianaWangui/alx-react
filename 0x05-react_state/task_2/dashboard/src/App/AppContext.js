import React from 'react'

const defaultUser = {
    email: '',
    password: '',
    isLoggedIn: false,
};

const defaultLogOut = () => {
    console.log('User logged out');
}

const AppContext = React.createContext({
    user: defaultUser,
    logOut: defaultLogOut,
});

export default AppContext;
