
async function getUsers(req, res) {
    try {
        res.send('users')
    } catch (err) {
        res.status(500).send({ err: 'Failed to get users' })
    }
}

async function getUser(req, res) {
    try {
        const { id } = req.params
        res.send(`get user: ${id}`)
    } catch (err) {
        res.status(500).send({ err: 'Failed to get user' })
    }
}

// async function addUser(req, res) {
//     try {
//         const { id } = req.params
//         res.send(`gdd user: ${id}`)

//     } catch (err) {
//         res.status(500).send({ err: 'Failed to add user' })
//     }
// }

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
    // addUser,
    updateUser,
    deleteUser,
}