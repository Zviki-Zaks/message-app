import React, { useEffect } from 'react'
import { Loader } from '../../components/common/Loader/Loader'
import { useForm } from '../../hooks/useForm'
import { useDispatch } from 'react-redux'
import { login, logout, saveUser } from '../../store/actions/userActions'


export const Login = () => {

    const dispatch = useDispatch()


    const { fields, register, setFields } = useForm()
    useEffect(() => {
        setFields({
            firstName: '',
            lastName: '',
            username: '',
            password: ''
        })
    }, [])

    const onLogin = (ev) => {
        ev.preventDefault()
        dispatch(login({ ...fields }))
    }
    const onSignup = (ev) => {
        ev.preventDefault()
        dispatch(saveUser({ ...fields }))
    }
    const onLogout = (ev) => {
        ev.preventDefault()
        dispatch(logout())
    }


    if (!fields) return <Loader />
    return (
        <section className="login-page">
            <form >
                <label htmlFor="firstName">First Name: </label>
                <input type="text" {...register('firstName')} />
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" {...register('lastName')} />
                <label htmlFor="username">Username:</label>
                <input type="text" {...register('username')} />
                <label htmlFor="password">Password:</label>
                <input type="text" {...register('password')} />
                <button className="signup-btn" onClick={onSignup}>Sign Up</button>
                <button className="login-btn" onClick={onLogin}>Log In</button>
                <button className="logout-btn" onClick={onLogout}>Log Out</button>

            </form>
        </section>
    )
}
