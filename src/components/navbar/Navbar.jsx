import React from 'react'
import "./Navbar.scss"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar_container">
                <div className="navbar_logo">
                    <span>Work</span>ora
                </div>
                <ul className='navbar_links'>
                    <li>Explore</li>
                    <li>How it Works</li>
                    <li>Become a Freelancer</li>
                </ul>

                <div className="navbar_actions">
                    <button className="btn login">Sign In</button>
                    <button className="btn signup">Join</button>
                </div>
            </div>
            <hr />

            <div className="menu">
                <span>Test</span>
                <span>Test</span>
            </div>

        </div>
    )
}

export default Navbar