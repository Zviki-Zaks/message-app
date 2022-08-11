const bcrypt = require('bcrypt')

const logger = require("../../services/logger.service")
const userService = require('../user/user.service')

async function signup(firstName, lastName, username, password) {
    const saltRounds = 10

    logger.debug(`auth.service - signup with username: ${username}, fullname: ${firstName} ${lastName}`)
    if (!firstName || !lastName || !username || !password) return Promise.reject('fullname, username and password are required!')

    const userExist = await userService.getUserByUsername(username)
    if (userExist) return Promise.reject('Username already taken')

    const hash = await bcrypt.hash(password, saltRounds)
    return userService.add({ firstName, lastName, username, password: hash })

}

async function login(username, password) {
    logger.debug(`auth.service - login with username: ${username}`)

    const user = await userService.getUserByUsername(username)
    const match = await bcrypt.compare(password, user.password)
    if (!user || !match) return Promise.reject('Invalid username or password')

    delete user.password
    return user
}

module.exports = {
    signup,
    login,
}