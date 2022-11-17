import React from 'react'
import { Link } from 'react-router-dom'

export default function MainPage() {
  return (
    <div>
        <Link to ='/about'>ABout</Link>
        <Link to ='/projects'>Project</Link>
        <Link to ='/contact'>Contact</Link>
    </div>
  )
}
