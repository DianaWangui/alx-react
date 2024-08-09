import React, { useState } from 'react'
import { StyleSheet, css } from 'aphrodite';

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [enableSubmit, setEnableSubmit] = useState(false)

    const handleLoginSubmit = () => {
        setIsLoggedIn(true)
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleEnableSubmit = () => {
        if (email.length !== 0 && password.length !== 0) {
            setEnableSubmit(true)
        }
    }
    handleEnableSubmit()

    return (
        <>
            <div className={css(styles.AppBody)}>
                <p>Login to access the full dashboard</p>
                <form className={css(styles.Form)}>
                    <div>
                        <label>Email: </label>
                        <input type='text' value={email} onChange={handleChangeEmail} />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type='password' value={password} onChange={handleChangePassword} />
                    </div>
                    <input type='submit' onClick={enableSubmit && handleLoginSubmit} />
                </form>
            </div>
        </>
    )
}

export default Login

const styles = StyleSheet.create({
    AppBody: {
        flexGrow: 1,
        padding: 10,
    },
    Form: {
        display: 'flex',
        columnGap: 10,
    }
})
