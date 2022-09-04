import { storageService } from "./asyncService"
import { httpService } from "./httpService"
// import { socketService } from "./socketService"

export const userService = {
    login,
    logout,
    signup,
    getLoggedInUser,
    getUsers,
    getUser,
    removeUser,
    updateUser,
}

const MSGS_USERS = 'MSGS_USERS'
const MSGS_USER = 'MSGS_USER'

async function getUsers() {
    // const users = await storageService.query(MSGS_USERS)
    // return new Promise((resolve, reject) => {
    //     resolve(users)
    // })
    try {
        const user = await httpService.get('user')
        return _saveLoggedInUser(user)
    } catch (err) {
        throw err
    }
}

async function getUser(userId) {
    // const user = await storageService.get(MSGS_USERS, userId)
    // return new Promise((resolve, reject) => {
    //     resolve(user)
    // })
    try {
        const user = await httpService.get('user', userId)
        return _saveLoggedInUser(user)
    } catch (err) {
        throw err
    }

}

async function updateUser(updatedUser) {
    const user = await storageService.put(MSGS_USERS, updatedUser)
    return new Promise((resolve, reject) => {
        resolve(user)
    })

}

async function removeUser(userId) {
    await storageService.remove(MSGS_USERS, userId)
    return new Promise((resolve, reject) => {
        resolve(userId)
    })

}

async function login(userCred) {
    // const users = await storageService.query(MSGS_USERS)
    // const user = users.find(user => user.username === userCred.username && user.password === userCred.password)
    // return new Promise((resolve, reject) => {
    //     if (user) {
    //         const { _id, username, firstName } = user
    //         _saveLoggedInUser({ _id, username, firstName })
    //         resolve(user)
    //     } else reject('Cant login')
    // })
    try {
        const user = await httpService.post('auth/login', userCred)
        console.log('user', user)
        // socketService.emit('set-user-socket', user._id)
        return _saveLoggedInUser(user)
    } catch (err) {
        throw err
    }
}

async function logout() {
    // return new Promise((resolve, reject) => {
    //     _saveLoggedInUser()
    //     resolve()
    // })
    try {
        const user = await httpService.post('auth/logout')
        return _saveLoggedInUser(user)
    } catch (err) {
        throw err
    }
}

async function signup(userCred) {
    // const user = await storageService.post(MSGS_USERS, userCred)
    // return new Promise((resolve, reject) => {
    //     const { _id, username, firstName } = user
    //     _saveLoggedInUser({ _id, username, firstName })
    //     resolve(user)
    // })
    try {
        const user = await httpService.post('auth/signup', userCred)
        return _saveLoggedInUser(user)
    } catch (err) {
        throw err
    }
}
async function getLoggedInUser() {
    return _loadLoggedInUser()
}

function _saveLoggedInUser(user = null) {
    sessionStorage.setItem(MSGS_USER, JSON.stringify(user))
    return user
}
function _loadLoggedInUser() {
    return JSON.parse(sessionStorage.getItem(MSGS_USER))
}