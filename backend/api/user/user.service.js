const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')

module.exports = {
    getUsers,
    getUserById,
    getUserByUsername,
    addUser,
    updateUser,
    deleteUser,
}
async function getUsers() {
    try {

    } catch (err) {

    }
}
async function getUserById() {
    try {

    } catch (err) {

    }
}
async function getUserByUsername(username) {
    try {
        const collection = await dbService.getCollection('user')
        const user = await collection.findOne({ username })
        return user
    } catch (err) {
        logger.error(`while finding user ${username}`, err)
        throw err
    }
}
async function addUser({ firstName, lastName, username, password }) {
    try {
        const userToAdd = {
            ..._getUser(),
            firstName,
            lastName,
            username,
            password
        }
        const collection = await dbService.getCollection('user')
        await collection.insertOne(userToAdd)
        return userToAdd
    } catch (err) {

    }
}
async function updateUser() {
    try {

    } catch (err) {

    }
}
async function deleteUser() {
    try {

    } catch (error) {

    }
}

function _getUser() {
    return {
        members: [],
        groups: [],
        activities: [],
    }
}