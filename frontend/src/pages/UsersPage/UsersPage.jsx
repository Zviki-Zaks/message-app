import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '../../components/common/Loader/Loader'
import { UserList } from '../../components/UserList/UserList'
import { socketService } from '../../services/socketService'
import { addMember, loadUsers } from '../../store/actions/userActions'

export const UsersPage = () => {

  const dispatch = useDispatch()
  const { users } = useSelector(store => store.userModule)

  useEffect(() => {
    dispatch(loadUsers())
  }, [])

  useEffect(() => {
    socketService.on('added-user', user => {
      dispatch(loadUsers())
    })
  }, [])

  const onAddMember = (memberId) => {
    dispatch(addMember(memberId))
  }

  if (!users) return <Loader />

  return (
    <section className="users-page">
      <UserList users={users} onAddMember={onAddMember} />
    </section>
  )
}
