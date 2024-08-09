import React from 'react'
import { StyleSheet, css } from 'aphrodite';

function Login() {
    return (
        <>
            <div className={css(styles.AppBody)}>
                <p>Login to access the full dashboard</p>
                <form className={css(styles.Form)}>
                    <div>
                        <label>Email: </label>
                        <input type='text' />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type='password' />
                    </div>
                    <button>OK</button>
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
