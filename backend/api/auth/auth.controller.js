
async function login(req, res) {
    try {
        res.send('login')
    } catch (err) {
        res.status(401).send('Failed to login')
    }
}

async function logout(req, res) {
    try {
        res.send('logout')
    } catch (err) {
        res.status(500).send('Failed to logout')
    }
}

async function signup(req, res) {
    try {
        res.send('signup')
    } catch (err) {
        res.status(500).send('Failed to signup')
    }
}

module.exports = {
    login,
    logout,
    signup,
}