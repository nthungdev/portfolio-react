import React from 'react'
import { Link } from 'react-router-dom'

const UnderConstruction = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="mb-4">My site is under construction :)</h1>

        <Link to="/deprecated" className="btn">
          See my old site
        </Link>
      </div>
    </div>
  )
}

export default UnderConstruction
