import React from 'react'

export const LoginForm = ({ register, onLogin }) => {
    return (
        <>
            <label htmlFor="username">Username:</label>
            <input type="text" {...register('username')} />
            <label htmlFor="password">Password:</label>
            <input type="text" {...register('password')} />
            <div className="actions">

                <button className="login-btn" onClick={onLogin}>Log In</button>

            </div>
        </>


    )
}
