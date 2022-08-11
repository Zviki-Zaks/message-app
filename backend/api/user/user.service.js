const { ObjectId } = require('mongodb')

const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')

module.exports = {
    query,
    getUserById,
    getUserByUsername,
    add,
    update,
    remove,
}
async function query() {
    try {
        const collection = await dbService.getCollection('user')
        const users = await collection.find({}).toArray()
        users.forEach(user => {
            delete user.password
        });
        return users
    } catch (err) {
        logger.error('cannot find users', err)
        throw err
    }
}
async function getUserById(userId) {
    try {
        const collection = await dbService.getCollection('user')
        const user = await collection.findOne({ _id: ObjectId(userId) })
        return user
    } catch (err) {
        logger.error(`while finding user ${userId}`, err)
        throw err
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
async function add({ firstName, lastName, username, password }) {
    try {
        const userToAdd = {
            ..._getEmptyUser(),
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
async function update() {
    try {

    } catch (err) {

    }
}
async function remove() {
    try {

    } catch (error) {

    }
}

function _getEmptyUser() {
    return {
        members: [],
        groups: [],
        activities: [],
    }
}