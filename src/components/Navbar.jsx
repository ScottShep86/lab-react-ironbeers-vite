import React from 'react'
import { Link } from 'react-router-dom'
import navbar from '../assets/navbar.png'


export default function Navbar() {
  return (
    <div>
        <Link to="/"><img className="bannerImg" src={navbar} alt='navbar'/></Link>
    </div>
  )
}
