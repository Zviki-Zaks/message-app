import React from 'react'

export const UserPreview = ({ user, onAddMember }) => {
    return (
        <div className="user-preview">
            <p className="user-name">{user.username}</p>
            <button className="select-btn" onClick={() => onAddMember(user._id)}>+</button>
        </div>
    )
}
