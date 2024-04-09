import { useState } from 'react'
import './App.css'
import {ChatEngine} from 'react-chat-engine'
import {ChatFeed} from './components/ChatFeed'
import LoginForm from './components/LoginForm'

function App() {
  if (!localStorage.getItem('username')) return <LoginForm />

  return (
   <div>
    <ChatEngine 
    height='100vh'
    projectID="5b6eaafd-00e4-4ffd-abb3-0ec7c261a757"
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} />}
    />
   </div>
  )
}

export default App
 