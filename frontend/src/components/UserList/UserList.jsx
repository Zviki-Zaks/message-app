import React from 'react'
import { UserPreview } from '../UserPreview/UserPreview'

export const UserList = ({ users, onAddMember }) => {
    return (
        <section className="users-list">
            {users.map(user => <UserPreview user={user} key={user._id} onAddMember={onAddMember} />)}
        </section>
    )
}
