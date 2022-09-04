import React, { useEffect, useState } from 'react'
import { Loader } from '../../components/common/Loader/Loader'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, saveUser } from '../../store/actions/userActions'
import { LoginForm } from '../../components/LoginForm/LoginForm'
import { SignupForm } from '../../components/SignupForm/SignupForm'


export const Login = () => {

    const dispatch = useDispatch()

    const { loggedInUser } = useSelector(state => state.userModule)

    const { fields, register, setFields } = useForm()
    useEffect(() => {
        setFields({
            username: '',
            password: ''
        })
    }, [])

    const [isSignup, setIsSignup] = useState(false)

    const setSignup = (ev) => {
        ev.preventDefault()
        setIsSignup(!isSignup)
        setFields({
            firstName: '',
            lastName: '',
            username: '',
            password: ''
        })
    }

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

            <form>
                {loggedInUser && <button className="logout-btn" onClick={onLogout}>Log Out</button> ||
                    isSignup && <SignupForm register={register} onSignup={onSignup} /> ||
                    <LoginForm register={register} onLogin={onLogin} />
                }

            </form>
            {!loggedInUser &&
                <button className="set-signup-btn" onClick={setSignup}>{isSignup ? 'Login' : 'Signup'}</button>
            }

        </section>
    )
}
