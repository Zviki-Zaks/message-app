import React from 'react'
import { useSelector } from 'react-redux'
import { ChatList } from '../../components/ChatList/ChatList'

export const ChatPage = () => {

    const { members } = useSelector(state => state.userModule.loggedInUser)

    return (
        <section className="chat-page">
            <ChatList members={members} />
        </section>
    )
}
