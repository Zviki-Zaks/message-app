const express = require('express')
const { getUsers, getUser, updateUser, deleteUser, addMember } = require('./user.controller')
const { requireAuth } = require('../../middlewares/requireAuth.middleware')


const router = express.Router()

router.get('/', getUsers)
router.get('/:id', getUser)
// router.put('/:id', updateUser)
router.put('/add-member', requireAuth, addMember)
router.delete('/:id', deleteUser)

module.exports = router
