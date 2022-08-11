const userService = require('./user.service')


async function getUsers(req, res) {
    console.log('req', req)
    try {
        const users = await userService.query()
        res.send(users)
    } catch (err) {
        res.status(500).send({ err: 'Failed to get users' })
    }
}

async function getUser(req, res) {
    try {
        // const { id, username } = req.params
        // let user
        // if (id) user = await userService.getUserById(id)
        // if (username) user = await userService.getUserByUsername(username)
        const { id } = req.params
        const user = await userService.getUserById(id)

        delete user.password
        res.send(user)
    } catch (err) {
        res.status(500).send({ err: 'Failed to get user' })
    }
}

async function updateUser(req, res) {
    try {
        const { id } = req.params
        res.send(`update user: ${id}`)

    } catch (err) {
        res.status(500).send({ err: 'Failed to update user' })
    }
}

async function deleteUser(req, res) {
    try {
        const { id } = req.params
        res.send(`delete user: ${id}`)

    } catch (err) {
        res.status(500).send({ err: 'Failed to delete user' })
    }
}

module.exports = {
    getUsers,
    getUser,
    updateUser,
    deleteUser,
}