import React, { useEffect } from 'react'
import "./Navbar.scss"
import { useState } from 'react'



const Navbar = () => {
    const [active, setActive] = useState(false)

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", isActive)

        return ()=>{
            window.removeEventListener("scroll", isActive)
        }
    }, [])
    
    return (
        <div className={active ? "navbar active" : "navbar"}>
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
            {active && (
                <><hr />

                <div className="menu">
                    <span>Test</span>
                    <span>Test2</span>
                </div></>
                )}

        </div >
    )
}

export default Navbar