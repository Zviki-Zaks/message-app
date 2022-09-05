import React from 'react'

export const ChatPreview = ({ member }) => {
    return (
        <div className="chat-preview">
            <p className="member-name">{member.username}</p>
        </div>
    )
}
