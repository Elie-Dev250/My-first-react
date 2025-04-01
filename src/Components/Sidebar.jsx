import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='side'>
       <ul>
          <li><Link to="/not">Notification</Link></li>
          <li><Link to="/vlog">Personal vlog</Link></li>
          <li><Link to="/content">New content</Link></li>
          <li><Link to="/more">More info..</Link></li>
          
          
        </ul>
    </div>
  )
}

export default Sidebar
