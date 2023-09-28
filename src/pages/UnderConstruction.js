import React from 'react'
import { Link } from 'react-router-dom'

const UnderConstruction = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="mb-4 text-3xl">My site is under construction 😊</h1>
        <p>Thank you for your interest though. <br/> Please come back another time!</p>

        <Link to="/deprecated" className="btn hidden">
          See my old site
        </Link>
      </div>
    </div>
  )
}

export default UnderConstruction
