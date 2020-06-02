import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            Du er i headeren nu
            <Link to="/">Tilbage til forsiden</Link>
        </div>
    )
}

export default Header
