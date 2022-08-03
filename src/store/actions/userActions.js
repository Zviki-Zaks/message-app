import { userService } from "../../services/userService"

export const loadUsers = () => {
    return async (dispatch) => {
        console.log('load')
        try {
            const users = await userService.getUsers()
            console.log('users', users)
            dispatch({ type: 'SET_USERS', users })
        } catch (err) {
            console.log('err', err)
        }
    }
}

export const loadUser = (userId) => {
    return async (dispatch) => {
        try {
            const user = await userService.getUser(userId)
            dispatch({ type: 'SET_USER', user })
        } catch (err) {
            console.log('err', err)
        }
    }
}

export const loadLoggedInUser = () => {
    return async (dispatch) => {

        try {
            const user = await userService.getLoggedInUser()
            dispatch({ type: 'SET_LOGGED_IN_USER', user })
        } catch (err) {
            console.log('err', err)
        }
    }
}

export const login = (userCred) => {
    return async (dispatch) => {
        try {
            const user = await userService.login(userCred)
            dispatch({ type: 'SET_LOGGED_IN_USER', user })
        } catch (err) {
            console.log('err', err)
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        try {
            await userService.logout()
            dispatch({ type: 'SET_LOGGED_IN_USER', user: null })
        } catch (err) {
            console.log('err', err)
        }
    }
}

export const saveUser = (userCred) => {
    return async (dispatch) => {
        try {
            const user = userCred._id ?
                await userService.updateUser(userCred) :
                await userService.signup(userCred)
            dispatch({ type: 'SAVE_USER', user })
        } catch (err) {
            console.log('err', err)
        }
    }
}

export const removeUser = (userId) => {
    return async (dispatch) => {

        try {
            await userService.removeUser(userId)
            dispatch({ type: 'REMOVE_USER', userId })
        } catch (err) {
            console.log('err', err)
        }
    }
}