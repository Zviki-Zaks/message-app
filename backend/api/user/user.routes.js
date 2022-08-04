const express = require('express')
const { getUsers, getUser, updateUser, deleteUser } = require('./user.controller')


const router = express.Router()

router.get('/', getUsers)
router.get('/:id', getUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router
