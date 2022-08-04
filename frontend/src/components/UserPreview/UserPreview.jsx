import React from 'react'

export const UserPreview = ({ user }) => {
    return (
        <div className="user-preview">
            <p className="user-name">{user.username}</p>
        </div>
    )
}
