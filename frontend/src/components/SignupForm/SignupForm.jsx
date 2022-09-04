import React from 'react'

export const SignupForm = ({ register, onSignup }) => {

    return (
        <>
            <label htmlFor="firstName">First Name: </label>
            <input type="text" {...register('firstName')} />
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" {...register('lastName')} />
            <label htmlFor="username">Username:</label>
            <input type="text" {...register('username')} />
            <label htmlFor="password">Password:</label>
            <input type="text" {...register('password')} />
            <div className="actions">

                <button className="signup-btn" onClick={onSignup}>Sign Up</button>

            </div>
        </>

    )
}
