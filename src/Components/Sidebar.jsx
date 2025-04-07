import React from 'react'
import { Link } from 'react-router-dom'
import UserList from '../Pages/UserList'

function Sidebar() {
  return (
    <div className='side'>
       <ul>
          <li><Link to="/not">Notification</Link></li>
          <li><Link to="/personal">Personal vlog</Link></li>
          <li><Link to="/content">New content</Link></li>
          <li><Link to="/shop">Shop now</Link></li>
          <li><Link to="/user">Userlist</Link></li>
          <li><Link to="/calcu">Culculator</Link></li>
          

          

          
          
          
        </ul>
    </div>
  )
}

export default Sidebar
