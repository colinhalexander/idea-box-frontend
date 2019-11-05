import React from 'react'
import { Link } from 'react-router-dom'

export default function Welcome() {

  return (
    <main className="wrapper">
      <div className="welcome-content">
        <img className="logo" src="https://www.yourmomhatesthis.com/images/2017/07/illuminati-png.png" alt="illuminati logo" />
        <h1>IdeaBox</h1>
        <p>Welcome to IdeaBox! This website has a lot of squares, and those squares have ideas. That's about it.</p>
        <div className="nav-links">
          <Link id="start-btn" to="/ideas">Start</Link>
          <Link id="form-btn" to="/new-idea">Add an Idea</Link>
        </div>
      </div>
    </main>
  )
}