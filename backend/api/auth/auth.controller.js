const authService = require('./auth.service')
const logger = require('../../services/logger.service')

async function login(req, res) {
    try {
        const { username, password } = req.body

        const user = await authService.login(username, password)

        req.session.user = user
        res.json(user)

    } catch (err) {
        logger.error('Failed to Login ' + err)
        res.status(401).send({ err: 'Failed to Login' })
    }
}

async function logout(req, res) {
    try {
        // req.session.destroy()
        req.session.user = null;
        res.send({ msg: 'Logged out successfully' })
    } catch (err) {
        res.status(500).send('Failed to logout')
    }
}

async function signup(req, res) {
    try {
        const { firstName, lastName, username, password } = req.body

        const account = await authService.signup(firstName, lastName, username, password)
        logger.debug(`auth.route - new account created: ` + JSON.stringify(account))

        const user = authService.login(username, password)
        req.session.user = user

        res.json(user)
    } catch (err) {
        logger.error('Failed to signup ' + err)
        res.status(500).send({ err: 'Failed to signup' })
    }
}

module.exports = {
    login,
    logout,
    signup,
}