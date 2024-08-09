import React from 'react'
import './Login.css'

function Login() {
    return (
        <>
            <div className='App-body'>
                <p>Login to access the full dashboard</p>
                <form className='Form'>
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