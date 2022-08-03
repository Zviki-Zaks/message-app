import React from 'react'
import { UserPreview } from '../UserPreview/UserPreview'

export const UserList = ({ users }) => {
    return (
        <section className="users-list">
            {users.map(user => <UserPreview user={user} key={user._id} />)}
        </section>
    )
}
