import React from 'react'
import { ChatPreview } from '../ChatPreview/ChatPreview'
import { Loader } from '../common/Loader/Loader'

export const ChatList = ({ members }) => {
    if (!members) return <Loader />
    return (
        <div className="chat-list">
            {members.map(member => <ChatPreview member={member} key={member.chatId} />)}
        </div>
    )
}
