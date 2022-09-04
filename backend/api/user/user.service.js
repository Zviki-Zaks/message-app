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
    addMember
}
async function query() {
    try {
        const collection = await dbService.getCollection('user')
        const users = await collection.find({}).toArray()
        return users.map(user => _getMiniUser(user))
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

async function addMember(userId, memberId) {
    const user = await getUserById(userId)
    const member = await getUserById(memberId)
    console.log('user', user)
    console.log('member', member)
    user.members.push(_getMiniUser(member))
    member.members.push(_getMiniUser(user))
    const collection = await dbService.getCollection('user')
    await collection.updateOne({ _id: user._id }, { $set: user })
    await collection.updateOne({ _id: member._id }, { $set: member })
    return _getMiniUser(member)
}

function _getMiniUser({ _id, firstName, lastName, username }) {
    return { _id, firstName, lastName, username }
}

function _getEmptyUser() {
    return {
        members: [],
        groups: [],
        activities: [],
    }
}